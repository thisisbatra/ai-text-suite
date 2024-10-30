import React from 'react';
import styles from './input.module.css';
const Input = () => {
    let placeHolder="write something to get its summary, minimum length to summarize is 200 characters.";
    
    return (
        <main className={styles.container}>
            <span className={styles.textAreaBox}>
                <p>char count: 0</p>
                <textarea id="" className={styles.textArea} placeholder={placeHolder} autoFocus></textarea>
            </span>
            <input type="submit" value="submit" className={styles.submitBtn} />
         </main>
    );
}

export default Input;
