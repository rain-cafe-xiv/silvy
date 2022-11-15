import { prisma, User } from '../utils/prisma';

export type UserServiceResponse = {
    id: string;
    name: string;
    pronouns: number[];
} & Partial<User>;

export type UserServiceSensitiveResponse = {
    pronouns: number[];
} & User;

export class UserService {
    static async getUserByID(id: string): Promise<UserServiceResponse>;
    static async getUserByID(id: string, includeSensitive: false): Promise<UserServiceResponse>;
    static async getUserByID(id: string, includeSensitive: true): Promise<UserServiceSensitiveResponse>;
    static async getUserByID(id: string, includeSensitive?: boolean): Promise<UserServiceResponse | UserServiceSensitiveResponse> {
        const [user, userPronouns] = await Promise.all([
            prisma.user.findFirst({
                where: {
                    id
                }
            }),
            prisma.userPronouns.findMany({
                where: {
                    userId: id
                }
            })
        ]);

        const pronouns = userPronouns.map(({ pronounsId }) => pronounsId);

        if (includeSensitive) {
            return {
                ...user,
                pronouns
            };
        }

        return {
            id: user.id,
            name: user.name,
            pronouns
        };
    }
}