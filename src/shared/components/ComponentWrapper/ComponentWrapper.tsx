import React from 'react';
import styles from './ComponentWrapper.module.css';

interface ComponentWrapperProps {
    title: string;
}

export const ComponentWrapper: React.FC<React.PropsWithChildren<ComponentWrapperProps>> = ({ title, children
}) => {

    return (
        <div className={"component-wrapper"}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default ComponentWrapper;