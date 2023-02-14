import React, { useRef, useState } from 'react'

const Child = (props) => {
    const userefValue=useRef("")
    const [value,setValue]=useState(userefValue.current)
    console.log(userefValue)
    function xyz()
    {
        userefValue.current.style.backgroundColor="red";
        
        const fetchData=async()=>
        {
            const response=await fetch("https://jsonplaceholder.typicode.com/users")
            const x=await response.json();
            console.log(x)
        }
        fetchData()

    }
    
  return (
    <div>
     <h1> {props.passdata}</h1>
     <input ref={userefValue}></input>
     <h2>{value}</h2>
     <button onClick={xyz}>{props.passdata}</button>
    </div>
  )
}

export default Child
