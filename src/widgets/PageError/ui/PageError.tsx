import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import styles from './PageError.module.scss';

interface IPageErrorProps {
  className?: string
}
export const PageError = ({ className }: IPageErrorProps) => {
    const { t } = useTranslation('error');

    const reloadPageHandler = () => {
        location.reload();
    };
    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <p>{t('Something went wrong')}</p>
            <Button onClick={reloadPageHandler} type="button">
                {t('Refresh page')}
            </Button>
        </div>
    );
};
