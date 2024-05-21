import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 21rem;
    display: flex;
    height: 32rem;
    padding: 2.4rem;
    align-items: center;
    border-radius: 0.8rem;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_200};
    background-color: ${({ theme }) => theme.COLORS.DARK_300};

    > h3 {
        font-weight: 400;
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
    }

    > h4 {
        font-weight: 500;
        font-size: 1.6rem;
        margin-bottom: 1.2rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    > button:nth-last-child(1) {
        margin: 0;
        padding: 0;
        top: 1.6rem;
        right: 1.6rem;
        position: absolute;
        justify-content: end;
        background: transparent;

        svg {
            font-size: 2.5rem;
        }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MOBILE_M}){
        width: 300px;
    }
`;

export const Dish = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    margin-bottom: 1.2rem;
`;

export const Options = styled.div`
    display: flex;
    align-items: center;

    span {
        margin: 0 1rem;
        font-size: 2rem;
        font-weight: 600;
    }

    button {
        margin: 0;
        padding: 0;
        width: 5rem;
        background: transparent;

        > svg {
            font-weight: 600;
            font-size: 2.5rem; 
        }
    }
`;