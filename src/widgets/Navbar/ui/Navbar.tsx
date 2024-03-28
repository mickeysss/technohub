import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ui';

import styles from './Navbar.module.scss'

interface INavBarProps {
  className?: string;
}

export const Navbar = ({ className }: INavBarProps) => {

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={styles.links}></div>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.mainLink}>Main</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About us</AppLink>
    </div>
  );
};
