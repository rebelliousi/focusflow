import { useEffect, useState } from "react"

const App=()=>{

    const [second,setSecond]=useState(1*60)

    const [isRunning,setIsRunning]=useState(false)
    const [sessionCount,setSessionCount]=useState(0)

    useEffect(()=>{
        if (isRunning===false)
            return
        const interval=setInterval(()=>{
            
            setSecond(prev=>{
                if(prev===0){
                    console.log("tick fired, prev was:", prev)
                   
                    setIsRunning(false)
                     setSessionCount(prev=>prev+1)
                   
                    return 0

                    
                 
                }else return prev-1})
       
           
        },1000)
     return ()=>clearInterval(interval)
    },[isRunning])


    const toggleRunning =()=>{
        setIsRunning(prev=>!prev)
    }
    const toggleReset=()=>{
        setSecond(25*60)
        setIsRunning(false)
    }


    const min=Math.floor(second/60)
    const sec=Math.floor(second%60)
    return(
        <div>
         <h1>{min}:{sec<10 ? '0'+sec : sec }</h1>
         <button  onClick={toggleRunning}>{isRunning ? 'stop' : 'start'}</button>
         <button onClick={toggleReset}>Reset</button>
         <h1>Your total session:{sessionCount}</h1>
        </div>
    )
}
export default App