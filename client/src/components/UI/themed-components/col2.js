import {
    Col,
} from 'antd';
import styled from 'styled-components';

const StyledCol2 = styled(Col)`
background-color: ${props => props.theme.secondaryBackground};
color: ${props => props.theme.color};
padding:15px
`

export default StyledCol2;