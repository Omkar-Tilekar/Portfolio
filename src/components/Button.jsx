import React from 'react';
import clsx from 'clsx';
import './Button.css'; // Optional if we use inline/global classes

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    as = 'button',
    href,
    onClick,
    ...props
}) {
    const Component = as === 'a' || href ? 'a' : 'button';

    const baseClasses = 'btn';
    const variantClasses = `btn-${variant}`;
    const sizeClasses = `btn-${size}`;

    return (
        <Component
            className={clsx(baseClasses, variantClasses, sizeClasses, className)}
            href={href}
            onClick={onClick}
            {...props}
        >
            {children}
        </Component>
    );
}
