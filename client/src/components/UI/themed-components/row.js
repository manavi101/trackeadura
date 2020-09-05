import {
    Row,
} from 'antd';
import styled from 'styled-components';

const StyledRow = styled(Row)`
background-color: ${props => props.theme.background};
color: ${props => props.theme.color};
padding:15px
`

export default StyledRow;


