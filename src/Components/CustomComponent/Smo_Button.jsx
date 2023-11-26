import React from 'react';

export default function Smo_Button({
  id,
  href,
  className,
  children,
  type,
  onClick,
}) {
  return href ? (
    <a id={id} href={href} className={className}>
      {children}
    </a>
  ) : (
    <button id={id} type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
