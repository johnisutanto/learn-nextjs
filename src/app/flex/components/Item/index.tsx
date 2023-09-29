import * as React from 'react';
import styles from './index.module.css'

export interface ItemProps {
    children?: React.ReactNode
}

export default function Item (props: ItemProps) {
 const { children } = props
  return (
    <div className={styles.item}>
      {children || "Item"}
    </div>
  );
}
