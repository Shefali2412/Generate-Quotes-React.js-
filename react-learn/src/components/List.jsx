import React, { Component } from 'react'
import About from './About '

export default class List extends Component {
  constructor(props){ 
    super(props);
    this.state = {
      search: ""    // input name is same as here
    }

    this.searchChanged = (e) => {
        this.setState({
          search: e.target.value
        })
    }
  }
   
  render() {
    return (
      <div>
        <div>
          <input 
              name= "search" 
              type="text" 
              placeholder="write" 
              onChange={this.searchChanged}
              />
          <button>Show Search Word</button>
          <h4>{this.state.search}</h4>
        </div>
        <About 
                resetIndex={10}
                showBtn="true"
                color="green" 
                title="Another title" 
                users={[1,2,'Bla']}
                />
      </div>
    )
  }
}





// import About from './About';

// function List() {
//     return (
//         <div>
//            <ul>
//           <li>1</li>
//           <li>2</li>
//           </ul>

//           <div>
//             <input type="button" value="click" />
//           </div>
//           <h1>Hello World</h1>
//           <About title="Another title" users={[1,2,'Bla']}/>
//         </div>
        
      
//     )
//   }

//   export default List;