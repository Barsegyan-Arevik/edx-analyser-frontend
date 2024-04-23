export enum QuestionType {
    THREAD = 'thread',
    RESPONSE = 'response'
}

export interface ForumQuestion {
    author: string;
    title: string;
    body: string;
    likes_count: number;
    comments_count: number;
    question_type: QuestionType;
}