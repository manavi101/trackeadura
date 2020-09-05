import {
    Col,
} from 'antd';
import styled from 'styled-components';

const StyledCol = styled(Col)`
background-color: ${props => props.theme.background};
color: ${props => props.theme.color};
padding:15px;
`

export default StyledCol;