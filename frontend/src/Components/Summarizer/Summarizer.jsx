import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './summarizer.module.css';

const Summarizer = () => {
    return (
        <>
            <nav className={styles.title}>ai-text summarizer</nav>
            <Outlet/>
        </>
    );
}

export default Summarizer;
