import React from 'react'
import { forwardRef ,useImperativeHandle,useRef} from 'react'
import { createPortal } from 'react-dom'

const ResultModal = forwardRef(function ResultModal({targetTime,timerRemaining,handleReset},ref) {
    const dialog = useRef()
    const isLost = timerRemaining <= 0
    const timeLeft = (timerRemaining/1000).toFixed(2)
    const score = Math.round((1 - timerRemaining /(targetTime*1000)) * 100)
    useImperativeHandle(ref,()=>{
        return {
            open(){ dialog.current.showModal()} 
        }
    })
  return createPortal(
    <dialog ref={dialog} >
       {isLost && <h2>You lost</h2>}
       {!isLost && <h2>Your Score : {score}</h2>}
        <p>The target time was <strong>{targetTime} seconds</strong></p>
        <p>You stopped the timer with <strong>{timeLeft} seconds left </strong></p>
        <form action="" method='dialog' onClick={handleReset } onClose={handleReset}>
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById('modal')
  )
})

export default ResultModal