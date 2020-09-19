import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Loading = () =>{
    const antIcon = <LoadingOutlined style={{fontSize:"22px"}} spin />;
    return(
            <StyledLoading indicator={antIcon} />
    );
}

const StyledLoading = styled(Spin)`
background-color: transparent;
text-align:center;
padding: 5px;
font-size:25px;
color: ${props => props.theme.color} !important;
`


export default Loading;