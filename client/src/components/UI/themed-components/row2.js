import {
    Row,
} from 'antd';
import styled from 'styled-components';

const StyledRow2 = styled(Row)`
background-color: ${props => props.theme.secondaryBackground};
color: ${props => props.theme.color};
padding:15px
`

export default StyledRow2;


