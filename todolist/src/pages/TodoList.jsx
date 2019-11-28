import React, { Component } from 'react'
import List from './List'
import Form from './Form'
export class TodoList extends Component {
    state = {
        keywords : 'abc'
    }
    handleReceiveKeywords(keywords){
        this.setState({
            keywords
        })
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
