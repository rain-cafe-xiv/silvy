import { Pronouns } from '@prisma/client';
import {createContext} from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const PronounsContext = createContext<Pronouns[]>([]);