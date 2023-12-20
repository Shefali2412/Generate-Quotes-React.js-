import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function CountryHooks() {
    const[allCountries, setAllCountries] = useState() // usestae we have default value of variable to change var we use setfunction

    useEffect( () => { // useeffect is same as componentdidmout to print automatically on page without clicking button
        buttonClicked()
    }, []) // [] if we use this it will run for one time otherwise it will run for forever
        
    const buttonClicked =() => {
        // setAllCountries("Hello React Hooks")  // when btn clicked value of variable will change from hi to
        axios.get("https://restcountries.com/v3.1/all")
             .then(result => {
                setAllCountries(result.data)
             })
             .catch(err => {
                console.log(err)
             })
    }

  return (
    <div>
        {/* <button onClick={buttonClicked}>Click</button> */}
        {
           allCountries && allCountries.map( (country, index) => {
                return (
                    <h3 key={index}>{country.name.common}</h3>
                )
           })
        }
    </div>
  )
}
