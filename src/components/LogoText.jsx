import styled from 'styled-components'

const LogoText = styled.div.attrs ({
  size: props => props.size || '3em',
  color: props => props.color || 'white',
})`
    color: ${props => props.color};
    font-size: ${props => props.size};

    @media (max-width: 576px) {
        font-size: 1.8em;
    };

    @media (min-width: 992px) {
        font-size: 4em;
    };

    @media (min-width: 1200px) {
        font-size: 5em;
    };
`

export default LogoText