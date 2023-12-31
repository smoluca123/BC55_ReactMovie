import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export default function CustomNavLink({
  to,
  _className,
  activeColor = 'text-title-main',
  activeBg = 'bg-mainBg-main',
  children,
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) => {
        return cn(`${_className}`, {
          [`${activeBg} ${activeColor}`]: isActive,
        });
      }}
      role="menuitem"
      tabIndex={-1}
      id="user-menu-item-1"
    >
      {children}
    </NavLink>
  );
}
