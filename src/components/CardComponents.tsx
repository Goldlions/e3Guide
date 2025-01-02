import React, { ReactNode } from 'react';
import { paramCase } from 'param-case';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

interface CardSectionProps {
    title: string;
    children: ReactNode;
    description?: ReactNode;
    className?: string;
}

interface CardProps {
    title: string;
    description?: string;
    to: string;
    icon?: JSX.Element;
    tag?: {
        label: string;
        color: string;
        description: string;
    };
    className?: string;
}

export function CardSection({
                                title,
                                children,
                                description,
                                className,
                            }: CardSectionProps) {
    return (
        <div className={clsx('homepage-section', className)}>
            <h3 id={paramCase(title)}>{title}</h3>
            {description && <p className="section-description">{description}</p>}
            <div className="section-content">{children}</div>
        </div>
    );
}

export function Card({
                         title,
                         description,
                         to,
                         icon,
                         tag,
                         className,
                     }: CardProps) {
    return (
        <Link to={to} className={clsx("homepage-card", className)}>
            {icon && <div className="icon">{icon}</div>}
            <div className="card-content">
                <div className="title">{title}</div>
                {description && <div className="description">{description}</div>}
            </div>
            {tag && (
                <div className="tag absolute right-0 top-0 h-16 w-16">
          <span
              className="absolute right-[-28px] top-[-2px] w-[80px] rotate-45 transform py-1 text-center font-semibold text-white"
              style={{ backgroundColor: tag.color }}
              title={tag.description}
          >
            {tag.label}
          </span>
                </div>
            )}
        </Link>
    );
}