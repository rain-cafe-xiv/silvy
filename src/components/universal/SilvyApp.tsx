import { ReactNode, useEffect } from 'react';
import { areAnyLoading, LoadingKey } from '../../features/loading-statuses';
import { fetchPronouns } from '../../features/pronouns';
import { fetchUser } from '../../features/user';
import { useAppDispatch, useAppSelector } from '../../store';
import { AppLoading } from './AppLoading';
import Layout from './Layout';

export type SilvyAppProps = {
    children: ReactNode;
};

export function SilvyApp({
    children
}: SilvyAppProps) {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(areAnyLoading([
        LoadingKey.Pronouns,
        LoadingKey.User
    ]));

    useEffect(() => {
        dispatch(fetchUser());
        dispatch(fetchPronouns());
    }, []);

    return (
        <Layout>
            {children}
        </Layout>
    );
}