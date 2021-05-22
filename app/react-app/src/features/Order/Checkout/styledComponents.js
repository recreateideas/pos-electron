import styled, { css } from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: rgb(107 91 149 / 10%) 0px 8px 20px 0px;
`;

const TotalSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
`;

const GreatBigButton = styled.button`
    position: relative;
    background-color: #ff7b25;
    color: white;
    height: 0;
    bottom: -8px;
    border: none;
    ${props => {
        const { show } = props;
        return css`
            ${show &&
            css`
                height: 56px;
                bottom: 0px;
            `}
            transition: height .3s ease-in-out, transform .3s ease-in-out;
        `;
    }};
`;

const Label = styled.div`
    font-weight: 600;
`;

export { Container, TotalSection, GreatBigButton, Label };
