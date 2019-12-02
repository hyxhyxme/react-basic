import { CountConsumer } from "./CountProvider"
import React from 'react'
const Count = (props)=>{
    return (
        <CountConsumer>
            {
                ( { count }) =>{
                    return <span>{count}</span>
                }
            }
        </CountConsumer>
    )
}

export default Count