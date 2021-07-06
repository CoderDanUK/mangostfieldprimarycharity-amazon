import styled from 'styled-components';
import './StatsContainer.css';

const StatsContainer = (props) => {
    var StyledContainer = styled.div`
        background-color: #00771b;
        border: 1px solid black;
    `;
    return (
        <StyledContainer>
            <div className="text-center font-bold">
                <h1>Year 5 Students of Mangotsfield Primary are participating in a sponsored walk, the length of the River Amazon, to support conservation charities.</h1>
                <h2>Distance covered&nbsp;
                    <span className="td-underline">{props.state.walked} miles</span> of&nbsp;
                    <span className="td-underline">{props.state.amazonRiverLength} miles</span> ({props.completed}%)</h2>
                <p>
                    <a href="https://www.justgiving.com/crowdfunding/mangotsfield-primary" target="_blank">Link to Sponsor Mangotsfield Primary</a>
                </p>
            </div>
        </StyledContainer>
    );
}

export default StatsContainer;
