import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Child from './Child'
export class Parent extends Component {
   
    state = {
        title : 'parents',
        toyou:'rsr'
    }
    render() {
        console.log('parentsrender')
        return (
            <div>
                {this.state.title}
                <Child toyou={this.state.toyou} ></Child>
                <button onClick={this.handleClick.bind(this)}>点我改变父组件title值</button>
                <button onClick={this.destoryClick.bind(this)}>销毁</button>
            </div>
        )
    }
    UNSAFE_componentWillMount(){
        console.log('parentswillmount')
    }
    componentDidMount(){
        console.log('parentsdidmount');
    }
    UNSAFE_componentWillUpdate(){
        console.log('p-cwillupdate');   
    }
    shouldComponentUpdate(){
        console.log('pshouldupdate');
        
        return true
    }
    componentDidUpdate(){
        console.log('p-didupdate');
        
    }
    handleClick(){
        this.setState({
           /*  title:'hyx', */
            toyou:'hyy'
        })
    }
    componentWillUnmount(){
        console.log('p - unmount');
        
    }
    destoryClick(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
}

export default Parent
