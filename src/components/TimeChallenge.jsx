import React, { useRef } from 'react'
import { useState } from 'react'
import ResultModal from './ResultModal'
function TimerChallenge({title,targetTime}) {
    let timerRef = useRef()
    const dialogRef = useRef()
    const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000)
    const timerIsActive = timerRemaining > 0 && timerRemaining < targetTime * 1000
    if(timerRemaining <= 0){
        clearInterval(timerRef.current)
        
        dialogRef.current.open()
    }
    const handleReset = ()=>{
        setTimerRemaining(targetTime * 1000)
    }
  
    const handleStart = () =>{
       
       timerRef.current = setInterval(()=>{
            
            setTimerRemaining((prev)=>{
                return prev - 10 
            })
          
        },10)
        
    }
    const handleStop = () =>{
        clearInterval(timerRef.current)
        dialogRef.current.open()
    }
  return (
   <>
    <ResultModal ref={dialogRef} targetTime={targetTime} handleReset={handleReset} timerRemaining={timerRemaining}/>
   
     <div className='challenge'>
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's':''}
        </p>
        <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Stop":"Start"} Challenge</button>
        </p>
        <p className={timerIsActive ? 'active':''}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
    </div>
   </>
  )
}

export default TimerChallenge