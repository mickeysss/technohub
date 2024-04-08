import React, { useState } from 'react';

import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

import { classNames } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

import styles from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export function Sidebar({ className }: ISidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                toggle
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher className={styles.lang} />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
}
