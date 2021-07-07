import './App.css';
import River from './components/River/River';
import StatsContainer from './components/StatsContainer/StatsContainer';
import Jungle from './components/Jungle/Jungle';

const completed = () =>  (state.walked / state.amazonRiverLength) * 100;

const state = {
  amazonRiverLength: 4000, 
  walked: 1130,
};

const App = () => {
  return (
    <div>
      <div className="stats-container">
        <StatsContainer state={state} completed={Math.round(completed())} />
      </div>
      <div className="river-and-jungle-container">
        <River complete={completed()} />
        <Jungle />
      </div>
    </div>
  );
}

export default App;
