import './StatsContainer.css';

const StatsContainer = (props) => {
    return (
    <div className="stats-container">
        <h1>Mangotsfield Primary School has completed {props.state.walked}km of {props.state.amazonRiverLength}km ({props.completed}%)</h1>
    </div>
    );
}

export default StatsContainer;