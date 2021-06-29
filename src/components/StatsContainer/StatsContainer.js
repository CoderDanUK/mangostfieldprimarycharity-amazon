import './StatsContainer.css';

const StatsContainer = (props) => {

    return (
    <div className="stats-container">
        <div className="text-center font-bold">
            <h1>Year 5 Students of Mangotsfield Primary are participating in a sponsored walk to help preserve the Amazon Rainforest</h1>
            <h2>Distance covered&nbsp;
                <span className="td-underline">{props.state.walked}km</span> of&nbsp;
                <span className="td-underline">{props.state.amazonRiverLength}km</span> ({props.completed}%)</h2>
            <p>
                <a href="#">Link to Sponsor Mangotsfield Primary</a>
            </p>
        </div>
    </div>
    );
}

export default StatsContainer;