import { UserType } from '@shared/types';
import { v4 as uuidv4 } from 'uuid';

const createMockUser = (): UserType[] => {
    const users: UserType[] = []
    const now = new Date().toISOString();

    Array.from({ length: 10 }).forEach(() => {
        users.push({
            id: uuidv4(),
            name: `User_${Math.floor(Math.random() * 1000)}`,
            email: `user${Math.floor(Math.random() * 1000)}@example.com`,
            createdAt: now,
            updatedAt: now
        });
    });

    return users;
};

export default createMockUser;
