export enum CompletionStatus {
    NOT_STARTED = 'not_started',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed'
}

export type StudentData = {
    id: number;
    username: string;
    completionStatus: CompletionStatus;
    daysOnline: number;
    timeOnCourse: number;
    videoWatching: number;
    textbookScrolling: number;
    problemsSolved: number;
    forumActivity: number;
}