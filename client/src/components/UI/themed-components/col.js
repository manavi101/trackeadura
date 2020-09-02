import {
    Col,
} from 'antd';
import styled from 'styled-components';

const StyledCol = styled(Col)`
background-color: ${props => props.theme.background};
color: ${props => props.theme.color};
border-radius: 15px;
padding:15px
`

export default StyledCol;