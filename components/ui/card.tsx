import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLElement> {
  title: string;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="w-full bg-muted rounded-lg p-3">
      <h2 className="font-bold text-center">{title}</h2>
      {children}
    </div>
  );
}
