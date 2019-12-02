import React, { Component,createContext } from 'react'
const { Provider, Consumer:CountConsumer } = createContext()
 
class CountProvider extends Component {
    constructor(){
        super()
        this.state = {
            count : 1
        }
    }
    increaseCount = ()=> {
        this.setState({
            count :this.state.count + 1
        })
    }
    decreaseCount = () =>{
        this.setState({
            count : this.state.count - 1 
        })
    }
    render() {
        
        return (
            <Provider 
                value={{
                    count : this.state.count,
                    increaseCount : this.increaseCount,
                    decreaseCount : this.decreaseCount
                }}>
                    {this.props.children}{/* 插槽，类似于vue中的slot，将使用此组件时放入的元素放在此处 */}
            </Provider>
        )
    }
    componentDidMount(){
        console.log(this.context)
    }
}

export  {
    CountProvider,
    CountConsumer
}
