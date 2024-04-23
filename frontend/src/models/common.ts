export enum SectionType {
    TEXTBOOK = 'textbook',
    VIDEO = 'video',
    PROBLEMS = 'problem',
    FORUM = 'forum'
}

export interface SectionActivity {
    section_type: SectionType;
    students_count: number
}

