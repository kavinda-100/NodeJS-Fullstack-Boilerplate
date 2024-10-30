import {zodUserType} from '../zod/user';

export type UserType = zodUserType & {
    createdAt: string;
    updatedAt: string;
}