import React, { Component } from 'react'

export class Child extends Component {
    /* constructor(props){
        super(props)
    } */
    state = {
        childTitle : 'children'
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
   
    componentDidMount(){
        console.log('childdidmount');
    }

    static getDerivedStateFromProps(){
        console.log('c-getderived');
        return false
    }
    getSnapshotBeforeUpdate(){
        console.log('c-snap');
     
        return false
    }
    componentWillUnmount(){
        console.log('c - unmount');
        
    }
    componentDidUpdate(){
        console.log('c-didUpdate');
        
    }
}

export default Child
