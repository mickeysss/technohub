type Modes = Record<string, boolean | string>

export function classNames(className: string, modes: Modes = {}, additional: string[] = []): string {
    return [
        className,
        ...additional.filter(Boolean),
        ...Object.entries(modes)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}
