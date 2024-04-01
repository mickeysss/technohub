import React, { useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ui';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

import styles from './Sidebar.module.scss'

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={styles.lang}/>
      </div>
    </div>
  );
};