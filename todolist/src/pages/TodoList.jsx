import React, { Component } from 'react'
import List from './List'
import Form from './Form'
export class TodoList extends Component {
    state = {
        keywords : 'abc',
        initValue :'-aba',
        
    }
    async handleReceiveKeywords(keywords){
        await this.setState({
            keywords,
            initValue:'----'
        })
        console.log(this.state.initValue);//-------

        /* this.setState({
            keywords,
            initValue:'----'
        })
        console.log(this.state.initValue);//-aba */
        //说明状态不会立即改变，setState是个异步操作        
        
    }
    render() {
        return (
            <div>
                <Form onReceiveKeywords={this.handleReceiveKeywords.bind(this)}> </Form>
                <List keywords={this.state.keywords}></List>
            </div>
        )
    }
}

export default TodoList
