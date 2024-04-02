import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import DarkIcon from '../../../../../assets/icons/theme-dark.svg';
import LightIcon from '../../../../../assets/icons/theme-light.svg';

interface IThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: IThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
}
