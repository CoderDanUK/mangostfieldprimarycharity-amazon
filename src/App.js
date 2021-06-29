import './App.css';
import River from './components/River/River';
import StatsContainer from './components/StatsContainer/StatsContainer';
import Jungle from './components/Jungle/Jungle';

const completed = () =>  (state.walked / state.amazonRiverLength) * 100;

const state = {
  amazonRiverLength: 6400, 
  walked: 4000,
};

const App = () => {
  return (
    <div>
      <StatsContainer state={state} completed={completed().toFixed(2)} />
      <div className="river-and-jungle">
        <River complete={completed()} />
        <Jungle />
      </div>
    </div>
  );
}

export default App;
