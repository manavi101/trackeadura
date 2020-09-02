import {
    Row,
} from 'antd';
import styled from 'styled-components';

const StyledRow = styled(Row)`
background-color: ${props => props.theme.background};
color: ${props => props.theme.color};
border-radius: 15px;
padding:15px
`

export default StyledRow;


