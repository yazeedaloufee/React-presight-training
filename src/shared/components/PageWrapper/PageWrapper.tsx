import React from 'react';
import styles from './PageWrapper.module.css';

interface PageWrapperProps {
  title:string;
}

export const PageWrapper: React.FC<React.PropsWithChildren<PageWrapperProps>> = ({
    title,
  children,
}) => {
  return (
    <div className={styles.PageWrapper}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.content}>
      {children}
    </div> 
    </div>
  );
};

export default PageWrapper;