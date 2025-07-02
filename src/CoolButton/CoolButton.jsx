import React from 'react';
import './CoolButton.css';

export default function CoolButton({ theme = 'default', size = 'medium', children, ...props }) {
  const classNames = [
    'cool-button',
    `cool-button--${theme}`,
    `cool-button--${size}`
  ].join(' ');
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
} 