import { Pronouns } from '@prisma/client';
import { mockAuthor } from './mocks';

export const authors = {
    ceci: mockAuthor({
        uid: 'ceci',
        name: 'Ceci',
        image: 'https://avatars.githubusercontent.com/u/9692284?v=4',
        pronouns: [Pronouns.SHE_HER, Pronouns.THEY_THEM]
    }),
    clover: mockAuthor({
        uid: 'clover',
        name: 'Clover',
        image: 'https://i.imgur.com/WKXMkzY.png',
        pronouns: [Pronouns.SHE_HER, Pronouns.THEY_THEM, Pronouns.HE_HIM]
    }),
    mumu: mockAuthor({
        uid: 'mumu',
        name: 'Mumu',
        image: 'https://i.imgur.com/I4bUHxt.png',
        pronouns: [Pronouns.THEY_THEM]
    })
}