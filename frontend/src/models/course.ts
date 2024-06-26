
export enum CourseVisibility {
    PUBLIC = 'Public',
    PRIVATE = 'Private'
}

export interface Course {
    course_id: string;
    name: string;
    image_url: string;
    short_name: string;
    owner: string;
    visibility: CourseVisibility;
}