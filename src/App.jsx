import { useEffect, useState } from "react"

const App=()=>{
    const [second,setSecond]=useState(1*60)

    const [isRunning,setIsRunning]=useState(false)

    const [session,setSession]=useState(0)

    useEffect(()=>{

        if (isRunning === false)
            return
        const interval=setInterval(()=>{
            setSecond(prev=>{
                if (prev===0){
                    setIsRunning(false)
                    setSession(prev=>prev+1)
                    return 0
                }else return prev-1
            })
        },1000)

        return()=> clearInterval(interval)
    },[isRunning]) 

    const min=Math.floor(second/60)
    const sec=Math.floor(second%60)

    const handleRunning=()=>{
        setIsRunning(prev=>!prev)
    }

    const handleReset=()=>{
        setSecond(25*60)
        setIsRunning(false)
    }
    return(
        <div>
          <h1>{min}:{sec<10 ? "0"+sec : sec}</h1>

          <button  onClick={handleRunning}>{isRunning ? 'stop' : "start"}</button>

          <button onClick={handleReset}>reset</button>
          <h1>Your total session:{session}</h1>
        </div>
    )
}

export default App