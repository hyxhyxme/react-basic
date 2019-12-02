import React from 'react'
import ReactDOM from 'react-dom'
import { CountProvider } from './CountProvider.jsx'
import CountButton from './CountButton'
import Count from './Count'

ReactDOM.render(
    <CountProvider>
        <CountButton type='decrease'></CountButton>
        <Count></Count>
        <CountButton type='increase'></CountButton>
    </CountProvider>,
    document.getElementById('root')
)


