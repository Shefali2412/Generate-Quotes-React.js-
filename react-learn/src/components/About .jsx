import React, { Component } from 'react'

export default class About  extends Component {
  constructor(props){ // is way to build our obj by passing props
      super(props);
      this.state = {
        title: "class components",
        users: ["Ted", "Tom", "Sam"],
        index: 0
      }
      this.updateIndex = () => {
        // console.log(this.state)
        let newIndex = this.state.index + 1
        // console.log(newIndex)
        if(this.state.index >= this.props.resetIndex) 
        {
          this.setState({ 
            index: 0
          })
        } else {
        this.setState({    // we write inside an object
          index: newIndex,  // whatever we need to change we put here
          title: "Something else"
        })
        }
      }
  }  
  render() {
    console.log(this.props)
    return (
      <div>

        { 
          this.props.showBtn === "true" ? 
            <div>
                <h2>{this.state.index}</h2>
               <button onClick={this.updateIndex}>Click</button>
            
             </div>
           : null  
  }
        {/* <button onClick={this.props.getRandomFun}>Click</button> */}
         <h1 style={{color: this.props.color}}>{this.state.title}</h1>
         {
            this.props.users.map( user => {
                return (
                    <h5>{user}</h5>
                )
            })
         }
         <hr />
         <hr />
      </div>
    )
  }
}





