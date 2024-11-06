import React from 'react';
import styles from './output.module.css'
import { FaCopy } from "react-icons/fa6";

const Output = () => {
    let placeHolder="output will be here...";
    let copy=()=>{
        window.confirm("copied!");
    }
    return (
        <main className={styles.container}>
            <span className={styles.copyIcon} onClick={copy}><FaCopy/></span>
            <div className={styles.textAreaBox}>
                <textarea name="" id="" className={styles.textArea} placeholder={placeHolder}></textarea> 
            </div>
        </main>
    );
}

export default Output;
