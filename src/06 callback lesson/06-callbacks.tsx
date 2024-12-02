import React, {ChangeEvent} from 'react'
import {MouseEvent} from "react";
// export const callback=():number=>{
//     alert('hey')
//     return 12;
// }
// window.setTimeout(callback,2000);


export const User=()=>{
    const search=(event:MouseEvent<HTMLButtonElement>)=>{
alert(event.currentTarget.name)    }
    const saveUser=()=>{
    alert('User have been saved')
    }
    const onNameChanged=()=>{
        console.log('Name Changed')
    }
    const focusLosHandler=()=>{
    console.log('focus lost')
    }
    const onAgeChanged =(event:ChangeEvent<HTMLInputElement>)=>{
    console.log('onAgeChanged' + event.currentTarget.value)}
    return<div>
        <textarea onChange={onNameChanged}  onBlur={focusLosHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={'number'}/>
    <button name='delete' onClick={search}>search</button>

    </div>
}