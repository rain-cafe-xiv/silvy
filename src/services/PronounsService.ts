import { Pronouns } from '@prisma/client';
import { prisma } from '../utils/prisma';

export class PronounsService {
    static async getPronounsList(): Promise<Pronouns[]> {
        return prisma.pronouns.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    }

    static async getPronouns(id: number): Promise<Pronouns> {
        return prisma.pronouns.findFirst({
            where: {
                id
            }
        });
    }
}