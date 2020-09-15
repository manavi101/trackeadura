/*import {
    Button,
} from 'antd';*/
import styled from 'styled-components';

const StyledButtonText = styled.button`
background-color: transparent;
border: none;
padding: 10px;
color: ${props => props.theme.color};
&:hover {
    color: ${props => props.theme.color2};
    cursor:pointer;
}
&:focus {
    color: ${props => props.theme.color2};
    outline:none
}
`

export default StyledButtonText;