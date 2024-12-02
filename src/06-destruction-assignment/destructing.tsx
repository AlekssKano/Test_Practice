import {useState} from "react";

export type ManType1 = {
    name: string
    age: number,
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}
type PropsType={
title: string
    man:ManType1
    food:Array<string>
    car:{model:string}
}
export const ManComponents: React.FC<PropsType> =(props)=>{
    const {title, man, ...propsRest}=props //достаем title и man, остальное в propsRest

const [message, setMessage]=useState<string>('hello')
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>
}