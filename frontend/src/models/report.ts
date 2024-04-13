import { SectionActivity, SessionType } from './common'
import { AttemptCount } from './problems'
import { QuestionType } from './forum'


export enum ReportState {
    IN_PROGRESS = 'in_progress',
    DONE = 'done',
    FAILED = 'failed',
}

interface Report {
    course_id: string;
    last_time_accessed: Date;
    last_time_updated: Date;
    report_state: ReportState;
}

export interface CommonReport extends Report {
    session_time_chart: {
        items: { session_type: SessionType; average_time: number }[];
    };
    section_activity_chart: {
        items: SectionActivity[];
    };
    weekly_activity_chart: {
        items: { date: Date; value: number }[];
    }
}

export interface VideoReport extends Report {
    video_interaction_chart: {
        items: { video_link: string; views_count: number; unique_students_count: number }[];
    };
    video_play_count_chart: {
        items: { date: Date; count: number }[];
    }
}

export interface TextbookReport extends Report {
    textbook_views_chart: {
        items: { pdf_name: string; views_count: number; unique_students_count: number }[];
    }
    word_search_chart: {
        items: { word: string; search_count: number }[];
    }
}

export interface ProblemsReport extends Report {
    task_complexity_chart: {
        items: { problem_link: string; all_attempts: number; successful_attempts: number; }[];
    }
    task_summary_chart: {
        items: { attempt_count: AttemptCount; percentage: number; }[]
    }
}

export interface PagesReport extends Report {
    pages_popularity_chart: {
        items: { page_link: string; visits_count: number; }[]
    }
}

export interface ForumReport extends Report {
    forum_question_chart: {
        items: {
            author: string; title: string; body: string; likes_count: number;
            comments_count: number; question_type: QuestionType;
        }
    }
}
