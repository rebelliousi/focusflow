import { useEffect, useState } from "react"

const App=()=>{
    const [second,setSecond]=useState(0)

    useEffect(()=>{
        const interval=setInterval(()=>{
            setSecond(prev=>prev+1)
        },1000)

        return()=> clearInterval(interval)
    }) 
    return(
        <div>
          <h1>{second}</h1>
        </div>
    )
}

export default App