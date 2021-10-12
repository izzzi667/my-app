import React, { useState } from "react";
import { useEffect } from "react";

const ProfileStatusWithHooks =(props) => {
    
    let [editMode, setEditMode] = useState(false);    //возвращает массив из 2 элементов: 1 - значение в State 2 - колбэк-функция, изменяющее это значение
    let [status, setStatus] = useState(props.status);
    
    useEffect (()=>{
        setStatus(props.status);
    }, [props.status]);             //От чего зависит UseEffect

    const activateEditMode = () =>{
        setEditMode(true);
    }
    
    const deactivateEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status);

    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
        

        return(
            
            <div>
                {editMode ?
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                    </div>
                    :
                    <div>
                        <span onClick={activateEditMode}>{!props.status ? '----': props.status}</span>
                    </div> 
                }           
            </div>
            
        );
    
}


export default ProfileStatusWithHooks;