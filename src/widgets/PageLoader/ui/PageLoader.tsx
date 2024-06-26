import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Loader } from 'shared/ui/Loader/Loader';

import styles from './PageLoader.module.scss';

interface IPageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: IPageLoaderProps) => (
    <div className={classNames(styles.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
