import React from 'react'
import styles from"./bai7.module.css"
type BaseButtonProps = {
    type: 'primary' | 'secondary' | 'danger' | 'success';
    onClick?: () => void;
    children: React.ReactNode;
};

export default function Bai7(type:any, onClick:any, children:any) {
  return (
    <button className={`${styles.baseButton} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  )
}
