import React, { Component } from 'react'
import axios from 'axios'

export default class Countries extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            countries: [],
            showData: true
        }
        // mostly used to call API
        this.componentDidMount = () => { // when page fully loaded then it will print what ever inside this
            //WRITE CODE
            this.getCountries();
         } 
          
         this.getCountries = () => {
        
            axios.get("https://restcountries.com/v3.1/all") // to get data from api // GET, POST, UPDATE, DELETE
                 .then(result => {
                    console.log(result)
                    this.setState({
                        countries: result.data
                    })
                  })
                  .catch(err =>  {
                    console.log(err)
                  })
                }

              this.showData = () => {
                this.setState({
                   showData: !this.state.showData
                })
              }  
        }
       

        
  render() {
    return (
      <div>
          <div>
            <button onClick={this.getContries}>Get Contries</button>
          </div>
        {
          this.state.showData ?   
            this.state.countries && this.state.countries.map((country, index) => {
                return(
                    <div key={index}>
                        <h3>{index} : {country.name.common}</h3>
                    </div>
                )
            })
            : null
        }
      </div>
    )
  }
}


// componentdidcatch
// componentdidupdate
