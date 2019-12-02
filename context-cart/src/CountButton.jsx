import { CountConsumer } from "./CountProvider"
import React from 'react'
const CountButton = (props)=>{
    return (
        <CountConsumer>
            {
                ( {increaseCount, decreaseCount} )=>{
                    const { type } = props
                    const handleClick = type === 'increase' ? increaseCount : decreaseCount
                    const btnText = type === 'increase' ? '+' : '-'
                    return <button onClick={handleClick}>{ btnText }</button>
                }
            }
        </CountConsumer>
    )
}

export default CountButton