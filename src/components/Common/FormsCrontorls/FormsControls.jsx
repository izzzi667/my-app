import React from "react";
import styles from './FormsControls.module.css'


export const Textarea = ({input, meta,  ...props}) =>           //Деструктуризируем props, в meta приходит информация от redux-forms
{
    let hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl + ' '+ (hasError ? styles.error: '')}>            
            <div><textarea {...input} {...props} /></div>
            { hasError && <div><span>{meta.error}</span></div>}
        </div>
    )
}

export const Input = ({input, meta,  ...props}) =>           //Деструктуризируем props, в meta приходит информация от redux-forms
{
    let hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl + ' '+ (hasError ? styles.error: '')}>            
            <div><input {...input} {...props} /></div>
            { hasError && <div><span>{meta.error}</span></div>}
        </div>
    )
}