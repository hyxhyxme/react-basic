import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Child from './Child'
export class Parent extends Component {
    constructor(){
        super()
        this.c = React.createRef()
    }
    state = {
        title : 'parents',
        toyou:'rsr'
    }
    handleProps(index){
        console.log(index);
    }
    render() {
        console.log('parentsrender')
        return (
            <div>
                {this.state.title}
                <Child ref={this.c} toyou={this.state.toyou} onHandle={this.handleProps}></Child>
                <button onClick={this.handleClick.bind(this)}>点我改变父组件title值</button>
                <button onClick={this.destoryClick.bind(this)}>销毁</button>
            </div>
        )
    }
  
    componentDidMount(){
        console.log('parentsdidmount');
        console.log(this.c.current);
        
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
