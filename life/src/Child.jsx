import React, { Component } from 'react'

export class Child extends Component {
    /* constructor(props){
        super(props)
    } */
    constructor(){
        super()
        this.child  = React.createRef();
        
    }
    state = {
        childTitle : 'children'
    }
    handleClick(){
        this.props.onHandle('oooo')
    }
    render() {
        console.log('childrender');
        let { toyou } = this.props
        console.log(toyou);
        return (
            <div>
                {this.state.childTitle}
                <span ref={this.child}>{this.props.toyou}</span>
                <button  onClick={this.handleClick.bind(this)}>sdfjsdfa</button>
            </div>
        )
    }
   
    componentDidMount(){
        console.log('childdidmount');
        console.log(this.child.current);
        
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
