import type { Request, Response } from "express";
import createMockUser from "./user.model";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = createMockUser();
        res.status(200).json(users);
    }
    catch (error: Error | any) {
        res.status(500).json({ message: error.message });
    }
};