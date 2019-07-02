import React, { Component } from 'react'
import Header from './components/Header'
import AddHomework from './components/AddHomework'
import ListHomework from './components/ListHomework'


export default class App extends Component {
  state = {
    homeworks:[]
  }


componentDidMount(){
  const homeworksLS = localStorage.getItem('homeworks')

    if(homeworksLS){
      this.setState({
        homeworks: JSON.parse(homeworksLS)
      })
    }
}


  componentDidUpdate() {
    localStorage.setItem('homeworks',JSON.stringify(this.state.homeworks))
  }


  getHomework = (homework) => {
    let homeworks = [...this.state.homeworks,homework]

    this.setState({homeworks})

  }

  deleteHomework = (id) => {
  
    let copiaState = [...this.state.homeworks]

    let homeworks = copiaState.filter(num => num.id !== id)

    this.setState({homeworks})
  }

  render() {
    return (
      <div className="App">
        <Header 
          titulo='TodoList Dakeiv'
        />

      <div className="App-Body"> 
        <AddHomework 
          getHomework = {this.getHomework}
        />


        <ListHomework 
          homeworks= {this.state.homeworks}
          deleteHomework = {this.deleteHomework}
        />
      </div>
      </div>
    )
  }
}

