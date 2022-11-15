import { Pronouns } from '@prisma/client';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { pronounsApiModule } from '../../pages/api/pronouns';
import { userApiModule } from '../../pages/api/user';
import { humanizePronounsList } from '../../utils/pronouns';
import { useReadOnlyCachedState } from '../hooks/use-cached-state';
import { Badge } from './Badge';
import styles from './Pronouns.module.scss';

export type PronounsViewerProps = {
    pronouns: number[];
    validPronouns: Pronouns[];
}

export function PronounsViewer({
    pronouns,
    validPronouns: externalValidPronouns
}: PronounsViewerProps): JSX.Element {
    console.log(externalValidPronouns);
    // const pronounsList = useReadOnlyCachedState(() => {
    //     return humanizePronounsList(externalValidPronouns);
    // }, [externalValidPronouns]);

    return (
        <div className={styles.pronouns}>
            {/* {pronouns.map((pronouns) => (
                <Badge>
                    {pronouns}
                </Badge>
            ))} */}
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Partial<PronounsViewerProps>>> {
    try {
        const pronouns = await pronounsApiModule.get();

        // Pass data to the page via props
        return { props: { validPronouns: pronouns } };
    } catch (error) {
        return {
            redirect: {
                permanent: false,
                destination: '/'
            }
        };
    }
}