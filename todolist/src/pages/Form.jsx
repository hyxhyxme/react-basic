import React, { Component } from 'react'

class Form extends Component {
    state = {
        keywords : ''
    }
    handleChange(e){
        this.setState({
            keywords : e.target.value
        })
    }
    handleKeyUp(e){
        if(e.keyCode === 13){
            this.props.onReceiveKeywords(this.state.keywords)
            this.setState({
                keywords : ''
            })
        }
    }
    render(){
        return (
            <>
                <input type="text" 
                    value={this.state.keywords}  
                    onChange={this.handleChange.bind(this)}
                    onKeyUp={this.handleKeyUp.bind(this)}/>
            </>
        )
    }
}

export default Form 