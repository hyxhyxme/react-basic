import React, { Component } from 'react'

class List extends Component {
    state = {
        list : ['task1', 'task2']
    }

    UNSAFE_componentWillReceiveProps(props){
       this.setState({
           list:[
               ...this.state.list,
               props.keywords
           ]
       })
    }
    handleDel(index){
        this.state.list.splice(index,1)
        this.setState({})
    }
    render(){
        return (
            <ul>
                {
                    this.state.list.map((value,index)=>{
                        return (
                            <li key={index+value}>{value} <button onClick={this.handleDel.bind(this,index)}>X</button></li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default List