export enum SectionType {
    TEXTBOOK = 'pdf',
    VIDEO = 'video',
    PROBLEMS = 'tasks',
    FORUM = 'forum'
}

export enum SessionType {
    BROWSER = 'browser',
    MOBILE = 'mobile',
    ALL = 'all'
}

export interface SectionActivity {
    section_type: SectionType;
    students_count: number
}

