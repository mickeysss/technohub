import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import styles from './NotFound.module.scss';

interface INotFoundProps {
    className?: string
}
export const NotFound = ({ className }: INotFoundProps) => {
    const { t } = useTranslation('not_found');
    return (
        <div className={classNames(styles.NotFoundPage, {}, [className])}>
            {t('Page not found')}
        </div>
    );
};
