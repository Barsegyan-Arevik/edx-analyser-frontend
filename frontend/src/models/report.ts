
export enum ReportState {
  Loading = 'loading',
  Done = 'done',
  Failed = 'failed',
}

interface Report {
    course_id: string;
    last_time_accessed: Date;
    last_time_updated: Date;
    report_state: ReportState;
}

export interface CommonReport extends Report {
    // completion_degree_chart: {
    //     items: { completion_degree: string; students_count: number }[];
    // };
    session_time_chart: {
        items: { session_type: string; average_time: number }[];
    };
    section_activity_chart: {
        items: { section_type: string; students_percent: number }[];
    };
    weekly_activity_chart: {
        items: {date: Date; value: number }[];
    }
}

export interface VideoReport extends Report {
    video_interaction_chart: {
        items: { video_link: string; students_visits_count: number; viewing_percent_median: number }[];
    };
    video_play_count_chart: {
        items: { date: Date; count: number }[];
    }
}
