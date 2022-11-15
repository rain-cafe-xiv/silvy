import { mockAuthor, mockStrat } from '@rain/test-utils/mocks';
import { authors } from '@rain/test-utils/prebuilts';
import { AuthorCard } from './AuthorCard';
import styles from './StratPage.module.scss';

export type StratPageProps = {
    id: string;
}

export function StratPage({
    id
}: StratPageProps) {
    const strat = mockStrat({
        id,
        author: authors[id] || mockAuthor()
    });

    return (
        <div className={styles.page}>
            <AuthorCard
                author={strat.author}
            />
        </div>
    );
}