import React, { Component } from 'react'
/* import PropTypes from 'prop-types' */
import ListItem from './ListItem'
class List extends Component {
  /*   static defaultProps = {//设置默认值，当父组件没有传过来keywords时用默认值
        keywords : 'abc'
    } */

   /*  static propTypes = { */
       /*  keywords : PropTypes.string.isRequired//传过来的keywords必须存在且必须是字符串 */
       /* keywords : PropTypes.oneOf(['abc','def'])//传过来的值必须是abc或者def */
      /*  keywords : function(props,propName,component){//传过来的keywords必须是abc
           if(props.keywords !== 'abc'){
               return new Error()
           }
       } */
    /* } */
    state = {
        list : ['task1', 'task2'],
        title:'<b>hello</b>',
        show:true
    }

    UNSAFE_componentWillReceiveProps(props){//监听props的变化，是个钩子
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
        console.log(this);
        
    }
   /*  handleShowList = () =>{
        this.setState((prevState)=>{
            return {
                show :!prevState.show
            }
        })
    } */
    handleShowList = ()=>{
        this.setState((prevState)=>{
            return {
                show : !prevState.show
            }
        })
    }
    render(){
        return (
           /*  <ul>
                {
                    this.state.list.map((value,index)=>{
                        return (
                            <li key={index+value}>{value} <button onClick={this.handleDel.bind(this,index)}>X</button></li>
                        )
                    })
                }
            </ul> */
            <>
                {
                    this.state.show&&
                    <ul>
                    {
                        this.state.list.map((value,index)=>{
                        return (
                            <ListItem
                                key={index+value}
                                value={value}
                                onItemClick={this.handleDel.bind(this,index)}>
                            </ListItem>
                        )
                        })
                    }
                    <li>
                        <label htmlFor="abc"></label>
                        <span dangerouslySetInnerHTML={{__html:this.state.title}}></span>{/* 显示标签 */}
                    </li>
                </ul>    
                } 
                <button onClick={this.handleShowList}>showlist</button>
           </>
        )
    }
}

export default List