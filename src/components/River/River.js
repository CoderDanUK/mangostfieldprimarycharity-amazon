import './River.css';
import styled from 'styled-components';

const safeHeight = (height) => height < 0 ? 0 : height;
const heightOffset = 6;

const River = (props) => {
    var waterHeight = safeHeight(props.complete - heightOffset);
    var StyledBottom = styled.div`
        height: ${waterHeight}vh;
        top: ${100 - waterHeight}vh;
    `;

    var StyledWave = styled.div`
        top: ${100 - waterHeight - 10}vh;
    `;

    return (
        <div className="river">
            <StyledWave className="wave"></StyledWave>
            <StyledBottom className="bottom"></StyledBottom>
        </div>
    );
}

export default River;