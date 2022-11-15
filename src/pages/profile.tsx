import Head from 'next/head';
import { ProfilePage } from '../components/profile/ProfilePage';
import { UserServiceSensitiveResponse } from '../services/UserService';

export type ProfileProps = {
    user: UserServiceSensitiveResponse;
}

export default function Profile({
    user
}: ProfileProps) {
    return (
        <div>
            <Head>
                <title>Profile · Silvy</title>
            </Head>
            <ProfilePage
                user={user}
            />
        </div>
    )
}