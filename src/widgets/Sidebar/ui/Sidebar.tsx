import React, { useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ui';
import { Button } from 'shared/ui/Button/Button';

import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

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
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button type="button" onClick={onToggle}>toggle</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
}
