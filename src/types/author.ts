import { Pronouns } from '@prisma/client';

export type Author = {
    uid: string;
    name: string;
    image: string;
    pronouns: Pronouns[];
};