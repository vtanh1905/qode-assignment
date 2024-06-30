import { Comment } from "./comment";

export interface Image {
    id: number,
    url: string,
    comments: Comment[]
};