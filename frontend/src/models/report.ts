import { SectionActivity, SectionType, SessionType } from './common'


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
        items: {date: Date; value: number }[];
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
