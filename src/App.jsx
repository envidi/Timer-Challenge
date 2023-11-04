import Player from './components/Player.jsx';
import TimerChallenge from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='Easy' targetTime={1}/>
        <TimerChallenge title='Hard' targetTime={10}/>
        <TimerChallenge title='Extremly Hard' targetTime={10}/>
        <TimerChallenge title='Hell difficult' targetTime={10}/>
      </div>
    </>
  );
}

export default App;
