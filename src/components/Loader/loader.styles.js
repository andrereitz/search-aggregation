import styled from 'styled-components';

export const LoaderStyles = styled.div.attrs(props => ({
    'data-testid': 'loader'
}))`
    width: ${props => props.size ?? '30px'};
    height: ${props => props.size ?? '30px'};
    display: block;
    border-radius: 50%;
    
    &:before{
        width: 100%;
        height: 100%;
        display: block;
        content: '';
        border: 3px solid ${props => props.color ?? '#FFF'};
        border-top-color: transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation-name: loop;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes loop {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
      }
`;