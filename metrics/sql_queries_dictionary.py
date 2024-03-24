sql_query_completed_course_users = '''select allUsers.user_id as user_id, allUsers.user_name as user_name from (
            
            select uniqueUserIds.user_id as user_id, userAndIDs.user_name as user_name from (
                select 
                    log_line #>> '{context, user_id}' AS user_id 
                from logs 
                GROUP BY user_id 
            ) uniqueUserIds
            
            LEFT JOIN (
                select 
                    log_line -> 'username' as user_name,
                    log_line #>> '{context, user_id}' AS user_id 
                from logs 
                where log_line -> 'username' != 'null' and log_line -> 'username' != '""' and log_line -> 'username' is not null
                GROUP BY user_id, user_name
            ) userAndIDs
            
            ON uniqueUserIds.user_id = userAndIDs.user_id
        ) allUsers
        
        INNER JOIN (
            select 
                log_line #>> '{context, user_id}' as user_id
            from logs where log_line ->> 'name' LIKE 'edx.special_exam%'
            group by user_id
        ) usersWhoStartedAnyExam
        
        ON allUsers.user_id = usersWhoStartedAnyExam.user_id
        group by allUsers.user_id, user_name
        order by user_name desc'''

sql_query_enrolled_users_without_activity = '''select notStartedUsers.enrolled_but_not_started as user_id, userNames.user_name as user_name, notStartedUsers.enrollment_date as enrollment_date from (
            select enrolledUsers.user_id as enrolled_but_not_started, enrolledUsers.enrollment_date as enrollment_date from (
                select   
                    log_line #>> '{event, user_id}' as user_id,
                    TO_DATE(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::DATE as enrollment_date
                from logs
                where log_line #>> '{event_type}' = 'edx.course.enrollment.activated'		
            ) enrolledUsers
            LEFT JOIN (
                select total_time_per_day.user_id as user_id, SUM(total_time_per_day.time_at_session_per_day) as duration from (
                        select durationTable.session_user_id as user_id, durationTable.session_date, SUM(durationTable.session_duration) as time_at_session_per_day from (
                                select
                                    log_line #>> '{context, user_id}' as session_user_id,
                                    TO_DATE(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::DATE as session_date,
                                    log_line -> 'session' as session_name,
                                    age(MAX(TO_TIMESTAMP(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::TIMESTAMP), MIN(TO_TIMESTAMP(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::TIMESTAMP)) as session_duration
                                from logs
                                where log_line ->> 'session' != 'null' and log_line ->> 'session' != ''
                                    group by session_user_id, session_name, session_date
                            ) durationTable
                            group by durationTable.session_user_id, durationTable.session_date
                    ) total_time_per_day
                    group by total_time_per_day.user_id
            ) userTimeOnCourse
            ON userTimeOnCourse.user_id = enrolledUsers.user_id
            where userTimeOnCourse.user_id is null or duration = '00:00:00'
        ) notStartedUsers
        INNER JOIN (
            select uniqueUserIds.user_id as user_id, userAndIDs.user_name as user_name from (
                select 
                    log_line #>> '{context, user_id}' AS user_id 
                from logs 
                GROUP BY user_id 
            ) uniqueUserIds
            LEFT JOIN (
                select 
                    log_line -> 'username' as user_name,
                    log_line #>> '{context, user_id}' AS user_id 
                from logs 
                where log_line -> 'username' != 'null' and log_line -> 'username' != '""' and log_line -> 'username' is not null
                GROUP BY user_id, user_name
            ) userAndIDs
            ON uniqueUserIds.user_id = userAndIDs.user_id
        ) userNames
        ON userNames.user_id = notStartedUsers.enrolled_but_not_started
        group by user_name, notStartedUsers.enrolled_but_not_started, enrollment_date       
        order by user_name desc NULLS LAST'''

sql_query_started_but_not_completed_users = '''
        select allUsers.user_id as user_id, allUsers.user_name as user_name from (
            select uniqueUserIds.user_id as user_id, userAndIDs.user_name as user_name from (
                select 
                    log_line #>> '{context, user_id}' AS user_id 
                from logs 
                GROUP BY user_id 
            ) uniqueUserIds
            LEFT JOIN (
                select 
                    log_line -> 'username' as user_name,
                    log_line #>> '{context, user_id}' AS user_id 
                from logs 
                where log_line -> 'username' != 'null' and log_line -> 'username' != '""' and log_line -> 'username' is not null
                GROUP BY user_id, user_name
            ) userAndIDs
            ON uniqueUserIds.user_id = userAndIDs.user_id
        ) allUsers
        INNER JOIN (		
			select userTimeOnCourse.user_id as user_id from (
				select total_time_per_day.user_id as user_id, SUM(total_time_per_day.time_at_session_per_day) as duration from (
					select durationTable.session_user_id as user_id, durationTable.session_date, SUM(durationTable.session_duration) as time_at_session_per_day from (
							select
								log_line #>> '{context, user_id}' as session_user_id,
								TO_DATE(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::DATE as session_date,
				    			log_line -> 'session' as session_name,
								age(MAX(TO_TIMESTAMP(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::TIMESTAMP), MIN(TO_TIMESTAMP(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::TIMESTAMP)) as session_duration
							from logs
							where log_line ->> 'session' != 'null' and log_line ->> 'session' != ''
								group by session_user_id, session_name, session_date
						) durationTable
						group by durationTable.session_user_id, durationTable.session_date
				) total_time_per_day
				group by total_time_per_day.user_id
			) userTimeOnCourse
			LEFT JOIN (
				select 
					log_line #>> '{context, user_id}' as user_id
				from logs where log_line ->> 'name' LIKE 'edx.special_exam%'
				group by user_id
			) usersWhoStartedAnyExam
			ON userTimeOnCourse.user_id = usersWhoStartedAnyExam.user_id
			where usersWhoStartedAnyExam.user_id is null and userTimeOnCourse.duration > '00:00:00'
         ) usersWhoStartedCourseAndDidntTryAnyExam
        ON allUsers.user_id = usersWhoStartedCourseAndDidntTryAnyExam.user_id
        group by allUsers.user_id, user_name
        order by user_name desc NULLS last'''

sql_query_distinct_scrolling = """
        SELECT url_decode(split_part((log_line ->> 'event')::json ->> 'chapter','/', 7)) AS tutorial_book, 
        COUNT(url_decode(split_part((log_line ->> 'event')::json ->> 'chapter','/', 7)))
        FROM logs 
        WHERE log_line ->> 'event_type'
        LIKE  '%pdf%'
        GROUP BY tutorial_book;
    """

sql_query_distinct_views_of_available_pdf = """
        SELECT url_decode(split_part((log_line ->> 'event')::json ->> 'chapter','/', 7)) AS tutorial_book,
         COUNT(url_decode(split_part((log_line ->> 'event')::json ->> 'chapter','/', 7)))
        FROM logs WHERE log_line ->> 'event_type' = 'textbook.pdf.page.scrolled' 
        GROUP BY tutorial_book
    """

sql_query_searched_pdf_terms = """
        SELECT 
           trim((log_line ->> 'event')::json ->> 'query') as search_word,
           count(*) AS count_number
        FROM logs
        WHERE log_line ->> 'event_type' = 'textbook.pdf.search.executed'
        GROUP BY search_word
        ORDER BY count_number desc;
    """

sql_query_play_pause_events = ''' SELECT log_line ->> 'event_type' as event_t, 
	                                         log_line -> 'username' as username,
											 log_line -> 'time' as time 
	    							  FROM logs 
									  WHERE log_line ->> 'event_type' = 'pause_video' OR 
		    						        log_line ->> 'event_type' = 'play_video' '''

sql_query_play_video_times = '''select 
            TO_DATE(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS') as time_run, 
            count (*) as count_of_start
        from logs
        where log_line ->> 'event_type' = 'play_video'
        group by time_run
        order by time_run'''

sql_query_urls_and_names_mapping = '''select urlsAndIDs.target_name as target_name, uniqueUrls.target_url as target_url from (
            select 
                url_decode((log_line ->> 'event')::json ->> 'target_url') as target_url
            from logs
			where 
				log_line ->> 'event_type' LIKE '%link_clicked' or 
				log_line ->> 'event_type' LIKE '%selected'
            GROUP BY target_url 
        ) uniqueUrls
        LEFT JOIN (
            select 
				url_decode((log_line ->> 'event')::json ->> 'target_url') as target_url,
				(log_line ->> 'event')::json ->> 'target_name' as target_name
            from logs 
            where 
				(log_line ->> 'event_type' LIKE '%link_clicked' or 
				log_line ->> 'event_type' LIKE '%selected')
				and (log_line ->> 'event')::json ->> 'target_name' is not null
            GROUP BY target_name, target_url
        ) urlsAndIDs
        ON uniqueUrls.target_url = urlsAndIDs.target_url
		where uniqueUrls.target_url is not null
        order by target_name'''

sql_query_user_route = '''select uniqueUrls.target_url as target_url, urlsAndIDs.target_name as target_name from (
            select 
                url_decode((log_line ->> 'event')::json ->> 'target_url') as target_url
            from logs
			where 
				log_line ->> 'event_type' LIKE '%link_clicked' or 
				log_line ->> 'event_type' LIKE '%selected'
            GROUP BY target_url 
        ) uniqueUrls
        LEFT JOIN (
            select 
				url_decode((log_line ->> 'event')::json ->> 'target_url') as target_url,
				(log_line ->> 'event')::json ->> 'target_name' as target_name
            from logs 
            where 
				(log_line ->> 'event_type' LIKE '%link_clicked' or 
				log_line ->> 'event_type' LIKE '%selected')
				and (log_line ->> 'event')::json ->> 'target_name' is not null
            GROUP BY target_name, target_url
        ) urlsAndIDs
        ON uniqueUrls.target_url = urlsAndIDs.target_url
		where uniqueUrls.target_url is not null
        order by target_name'''

# Get unique event types
sql_query_distinct_event_types = '''select DISTINCT log_line -> 'name' AS edx_event from logs order by edx_event'''

sql_query_distinct_user_names_ids_events = '''select tbl.usr, tbl.evt, url_map.target_name, tbl.cnt from (
    with events (name) as (values ('play_video'), ('pause_video'), ('load_video'), ('edx.special_exam.proctored.attempt.started'), ('edx.ui.lms.outline.selected')),
    modules (url) as (	
	with pages (page) as (select distinct (log_line ->> 'page') from logs)
	select distinct
		case
    		when POSITION('?' in page) > 0 THEN SUBSTRING(page, 0, POSITION('?' in page))
    		when POSITION('#' in page) > 0 THEN SUBSTRING(page, 0, POSITION('#' in page))
    		else page
  		end as url
		from pages
		where page is not null
    ),
    mod_event (usr, mdl, evt) as (
	select
		coalesce (l.log_line ->> 'username', '<<' || (l.log_line #>> '{context, user_id}') || '>>'),
		case
    		when POSITION('?' in l.log_line ->> 'page') > 0 THEN SUBSTRING(l.log_line ->> 'page', 0, POSITION('?' in l.log_line ->> 'page'))
    		when POSITION('#' in l.log_line ->> 'page') > 0 THEN SUBSTRING(l.log_line ->> 'page', 0, POSITION('#' in l.log_line ->> 'page'))
    		else l.log_line ->> 'page'
  		end as url,
		l.log_line ->> 'event_type'
	from logs as l
    )
    select usr, mdl, evt, count(*) as cnt from mod_event
    where mdl in (select url from modules)
    	and evt in (select name from events)
    group by usr, mdl, evt
	) tbl	
	join (
		select 
				url_decode((log_line ->> 'event')::json ->> 'target_url') as target_url,
				(log_line ->> 'event')::json ->> 'target_name' as target_name
            from logs 
            where 
				(log_line ->> 'event_type' LIKE '%link_clicked' or 
				log_line ->> 'event_type' LIKE '%selected')
				and (log_line ->> 'event')::json ->> 'target_name' is not null
				and (log_line ->> 'event')::json ->> 'target_name' not LIKE '%текущий раздел%'
            GROUP BY target_name, target_url	
	) url_map
	on tbl.mdl = url_map.target_url	
    order by usr'''



sql_query_events_distribution = '''select 
            log_line ->> 'name' as event_name,
            TO_DATE(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS') as time_run,
            count (*) as count_of_start
        from logs
        where log_line ->> 'name' != \'\''''



sql_query_average_time_of_the_day_to_enroll = ''' 
    SELECT uniqueCourseIds.identifier as course_identifier, AVG(uniqueCourseIds.target_time) as course_time from (
        SELECT (log_line ->> 'context')::json ->> 'course_id' AS identifier,
        to_timestamp(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::TIME AS target_time
        FROM logs 
        WHERE log_line ->> 'event_type' LIKE '%enrollment.activated' 
    ) uniqueCourseIds GROUP BY course_identifier
    '''



sql_query_total_user_time_on_course = '''select total_time_per_day.user_id, SUM(total_time_per_day.time_at_session_per_day) as duration from (
            select durationTable.session_user_id as user_id, durationTable.session_date, SUM(durationTable.session_duration) as time_at_session_per_day from (
                    select
                        log_line #>> '{context, user_id}' as session_user_id,
                        TO_DATE(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::DATE as session_date,
                        log_line -> 'session' as session_name,
                        age(MAX(TO_TIMESTAMP(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::TIMESTAMP), MIN(TO_TIMESTAMP(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::TIMESTAMP)) as session_duration
                    from logs
                    where log_line ->> 'session' != 'null' and log_line ->> 'session' != ''
                        group by session_user_id, session_name, session_date
                ) durationTable
                group by durationTable.session_user_id, durationTable.session_date
                order by durationTable.session_date desc
        ) total_time_per_day
        group by total_time_per_day.user_id
        order by duration desc'''

sql_query_user_time_on_course_per_day = '''select durationTable.session_user_id, durationTable.session_date, SUM(durationTable.session_duration) as time_at_session_per_day from (
            select
                log_line #>> '{context, user_id}' as session_user_id,
                TO_DATE(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::DATE as session_date,
                log_line -> 'session' as session_name,
                age(MAX(TO_TIMESTAMP(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::TIMESTAMP), MIN(TO_TIMESTAMP(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS')::TIMESTAMP)) as session_duration
            from logs
            where log_line ->> 'session' != 'null' and log_line ->> 'session' != ''
                and log_line #>> '{context, user_id}' = %s
                group by session_user_id, session_name, session_date
        ) durationTable
        group by durationTable.session_user_id, durationTable.session_date
        order by durationTable.session_date desc'''


sql_query_page_activity_per_day = '''select   
            log_line -> 'page' as section_name, 
            TO_DATE(log_line ->> 'time', 'YYYY-MM-DD"T"HH24:MI:SS') as time_run,
            count(*) as interaction_count
        from logs
        where log_line ->> 'page' != 'null'
        group by section_name, time_run
        order by interaction_count desc'''

get_unique_pages_urls = '''select  
            log_line -> 'page' as section_name, 
            count(*) as interaction_count
        from logs
        where log_line ->> 'page' != 'null'
        group by section_name
        order by interaction_count desc'''
