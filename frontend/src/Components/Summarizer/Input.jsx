import React, { useState } from 'react';
import styles from './input.module.css';
const Input = () => {
    let placeHolder="write something to get its summary, minimum length to summarize is 200 characters.";
    let [charCount,setCharcount]=useState(0);
    let [inputText,setInputtext]=useState("");
    let textAreaHandler=(e)=>{
        // console.log(`textValue: ${e.target.value} & textLengh: ${e.target.textLength}`);
        setCharcount(e.target.textLength);
        setInputtext(e.target.value);
    }
    let onSubmit=()=>{
        if(charCount<200)
            window.alert(" you can't submit the text as minimum length should be 200.");
        else{
            window.confirm("the text length satisfied the criteria and you are good to go!");

        }
    }

    return (
        <main className={styles.container}>
            <span className={styles.textAreaBox}>
                <p>char count: {charCount}/200</p>
                <textarea id="" className={styles.textArea} placeholder={placeHolder} onChange={(e)=>textAreaHandler(e)} autoFocus></textarea>
            </span>
            <input type="submit" value="submit" className={styles.submitBtn} onClick={onSubmit} />
         </main>
    );
}

export default Input;