import { Pronouns } from '@prisma/client';

export function humanizePronounsList(pronounsList: Pronouns[]) {
    return pronounsList.map(humanizePronouns);
}

export function humanizePronouns(pronouns: Pronouns): string {
    return pronouns.replace(/_/g, '/');
}