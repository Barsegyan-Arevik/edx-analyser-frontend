export enum SectionType {
    TEXTBOOK = 'textbook',
    VIDEO = 'video',
    PROBLEMS = 'problem',
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

