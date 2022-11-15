import { ReactNode } from 'react';
import styles from './Badge.module.scss';

export type BadgeProps = {
    children: ReactNode;
}

export function Badge({
    children
}: BadgeProps) {
    return (
        <div className={styles.badge}>
            {children}
        </div>
    )
}