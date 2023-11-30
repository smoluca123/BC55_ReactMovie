import React from 'react';
import cn from 'classnames';
import styles from './loading.module.scss';
export default function Loading() {
  return (
    <div
      className={cn('w-[100vw] h-[100vh] fixed z-[999] top-0', styles.wrapper)}
    >
      <div>
        <div className={styles.loader}>
          <svg viewBox="0 0 80 80">
            <circle id="test" cx={40} cy={40} r={32} />
          </svg>
        </div>
        <div className={cn(styles.loader, styles.triangle)}>
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72" />
          </svg>
        </div>
        <div className={styles.loader}>
          <svg viewBox="0 0 80 80">
            <rect x={8} y={8} width={64} height={64} />
          </svg>
        </div>
      </div>
    </div>
  );
}
