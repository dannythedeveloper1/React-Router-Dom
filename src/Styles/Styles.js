import styled from "styled-components";

export const Container = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    background-color: ${props => props.bgColor};
    display: flex;
    justify-content: ${props=>props.jsCnt};
    align-items: center;
`;