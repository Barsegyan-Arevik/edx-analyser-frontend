export enum SectionType {
    TEXTBOOK = 'textbook',
    VIDEO = 'video',
    PROBLEMS = 'problem',
    FORUM = 'forum',
    PAGES = 'pages',
    COMMON = 'common'
}

export interface SectionActivity {
    section_type: SectionType;
    students_count: number
}

