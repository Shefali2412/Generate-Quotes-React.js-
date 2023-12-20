import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './style.css'

export default function Quote() {
    const[quote, setQuote] =useState({content: '', author:''});

    useEffect(() => {
         generateQuote()
    }, [])
     
    const generateQuote = () => {
        axios.get('https://api.quotable.io/random')
             .then(result => {
                console.log(result)
                const { content, author } = result.data
                setQuote({content, author})
             })
             .catch( err => {
                console.log(err)
             })
    }

  return (
    <div className='Quote'>

       <h1>Quote Generator</h1>
       <div className='quote-container'>
       {quote.content && (
            <div>
                <p>{quote.content}</p>
                <p className="author">-{quote.author}</p>
            </div>
            )}
        </div>  

         
         <button onClick={generateQuote}>New Quote</button>
    </div>
  )
}
