import React, { Component } from 'react'

export class Child extends Component {
    /* constructor(props){
        super(props)
    } */
    state = {
        childTitle : 'children'
    }
    UNSAFE_componentWillReceiveProps(){
        console.log('c-receiveProps');
    }
    render() {
        console.log('childrender');
        return (
            <div>
                {this.state.childTitle}
                <span>{this.props.toyou}</span>
            </div>
        )
    }
    UNSAFE_componentWillMount(){
        console.log('childswillmount')
    }
    componentDidMount(){
        console.log('childdidmount');
    }
    UNSAFE_componentWillUpdate(){
        console.log('c-willUpdate');
        
    }
    componentWillUnmount(){
        console.log('c - unmount');
        
    }
    componentDidUpdate(){
        console.log('c-didUpdate');
        
    }
}

export default Child
