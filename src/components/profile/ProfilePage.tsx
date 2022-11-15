'use client';

import { Pronouns, User } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { UserServiceSensitiveResponse } from '../../services/UserService';
import { ProfileCard } from './ProfileCard';
import styles from './ProfilePage.module.scss';

export type ProfilePageProps = {
    user: UserServiceSensitiveResponse;
}

export function ProfilePage({
    user
}: ProfilePageProps) {
    useSession({
        required: true
    });

    return (
        <div className={styles.page}>
            <ProfileCard
                user={user}
            />
        </div>
    );
}