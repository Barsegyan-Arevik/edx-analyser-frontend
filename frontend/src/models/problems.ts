export enum AttemptCount {
    FIRST_ATTEMPT = 'first',
    SECOND_ATTEMPT = 'second',
    MORE_ATTEMPTS = 'more'
}

export interface ProblemComplexity {
    problem_link: string;
    all_attempts: number;
    successful_attempts: number;
    question: string;
}

export interface ProblemSummary {
    attempt_count: AttemptCount;
    percentage: number;
}
