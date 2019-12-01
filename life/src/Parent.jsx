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
                <Child  toyou={this.state.toyou} ></Child>
                <button onClick={this.handleClick.bind(this)}>点我改变父组件title值</button>
                <button onClick={this.destoryClick.bind(this)}>销毁</button>
            </div>
        )
    }
  
    componentDidMount(){
        console.log('parentsdidmount');
    }
    static getDerivedStateFromProps(){
        console.log('p-derived');
        return null
    }
    componentDidUpdate(){
        console.log('p-didupdate');
        
    }
    getSnapshotBeforeUpdate(){
        console.log('p-snap');
        return false 
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
