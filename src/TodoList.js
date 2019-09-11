import React, { Component } from 'react';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render(){
    return (
    <div>
      <input value={this.state.inputValue}
             onChange = {this.handleInputChange.bind(this)}
              />
      <button onClick = {this.handleButtonClick.bind(this)}>submit</button>
      <ul>
        {
          this.state.list.map((item,index)=>{
            return <li key={index} onClick= {this.handleDelete.bind(this,index)}>{item}</li>
          })
        }
      </ul>
    </div>
    )
  }
  handleInputChange(e){
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }

  handleButtonClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleDelete(index){
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
  
}

export default TodoList;
