import React, { Component } from 'react'

export class ListItem extends Component {
    render() {
        return (//非可控组件，通过属性来获取值，没有状态
            <li>
                {this.props.value}
                <button onClick={this.props.onItemClick}>X</button>
            </li>
        )
    }
}

export default ListItem
