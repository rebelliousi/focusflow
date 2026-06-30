import { useEffect, useState } from "react"

const App=()=>{
    const [second,setSecond]=useState(0)

    const [isRunning,setIsRunning]=useState(false)

    useEffect(()=>{

        if (isRunning === false)
            return
        const interval=setInterval(()=>{
            setSecond(prev=>prev+1)
        },1000)

        return()=> clearInterval(interval)
    },[isRunning]) 

    const handleRunning=()=>{
        setIsRunning(prev=>!prev)
    }
    return(
        <div>
          <h1>{second}</h1>

          <button  onClick={handleRunning}>start</button>
        </div>
    )
}

export default App