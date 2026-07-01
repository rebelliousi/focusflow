import { useEffect, useState } from "react"

const App=()=>{
        const [workDuration,setWorkDuration]=useState(25)

    const [second,setSecond]=useState(workDuration*60)

    const [isRunning,setIsRunning]=useState(false)

    const [session,setSession]=useState(0)

    const [totalSeconds,setTotalSeconds]=useState(0)
    const [mode,setMode]=useState('work')

    useEffect(()=>{

        if (isRunning === false)
            return
        const interval=setInterval(()=>{
            setSecond(prev=>{
                if (prev===0 && mode==='work'){
                    setMode('break')
                   
                    setIsRunning(false)
                    setSession(prev=>prev+1)
                    return 1.5*60
                
                }else if(prev===0 && mode==='break'){
                    setMode('work')
                     setIsRunning(false)
                   return workDuration*60
                }
                else {setTotalSeconds(prev=>prev+1) 
                  return prev-1}
            })
        },1000)

        return()=> clearInterval(interval)
    },[isRunning,mode,workDuration]) 

    const min=Math.floor(second/60)
    const sec=Math.floor(second%60)

    const handleRunning=()=>{
        setIsRunning(prev=>!prev)
    }

    const handleReset=()=>{
        setSecond(workDuration*60)
        setIsRunning(false)
    }

    const handleDuration=(minutes)=>{
     setWorkDuration(minutes)
     setSecond(minutes*60)
    }

    const totalMin=Math.floor(totalSeconds/60)
    const totalSec=Math.floor(totalSeconds%60)
    return(
        <div>
          <h1>{min}:{sec<10 ? "0"+sec : sec}</h1>
          {second!==0 &&           <button  onClick={handleRunning}>{isRunning ? 'stop' : "start"}</button>
}
<h2>{mode==='work' ? 'Work Time' : 'Break time'}</h2>

          <button onClick={handleReset}>reset</button>
          <h1>Your total session:{session}</h1>

          <h1>Your total focus time:{totalMin}:{totalSec}</h1>

          <button onClick={()=>handleDuration(25)}>25 min</button>
          <button onClick={()=>handleDuration(50)}>50 min</button>
        </div>
    )
}

export default App