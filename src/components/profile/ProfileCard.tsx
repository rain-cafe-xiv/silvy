import { User } from '@prisma/client';
import { Direction } from '../../constants/components';
import { Avatar } from '../common/Avatar';
import { Card } from '../common/Card';
import { PronounsViewer } from '../common/Pronouns';
import { Typography } from '../common/Typography';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    user: User;
}

export function ProfileCard({
    user,
    ...extraProps
}: ProfileCardProps) {
    return (
        <Card
            className={styles.card}
            data-testid='author-card'
            direction={Direction.VERTICAL}
            {...extraProps}
        >
            <div className={styles.name}>
                <Typography as='h1'>
                    {user.name}
                </Typography>
                <PronounsViewer pronouns={user.pronouns}/>
            </div>
            <Avatar
                src={user.image}
                size={90}
            />
        </Card>
    );
}