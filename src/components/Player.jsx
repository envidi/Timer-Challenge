import { useState,useRef } from "react";


export default function Player() {
  const playerRef = useRef()
  const [playerName,setPlayerName] = useState()

  const handleSubmit = () =>{
    setPlayerName(playerRef.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerRef} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
