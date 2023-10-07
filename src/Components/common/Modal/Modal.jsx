import React from 'react';
import { Body, Frame, Box, ImgLogo, InputId, InputPwd, LoginBtn, UserInfos, SmallLogo, CopyLogo } from './styled.js';
import Logo from '../../../assets/Logo.svg';
import CopyRight from '../../../assets/CopyRight.svg';

export default function Modal() {
    return (
        <Body>
            <Frame>
                <Box>
                    <ImgLogo src={Logo} alt='로고'/>
                    <InputId placeHolder='아이디'/>
                    <InputPwd placeHolder='비밀번호'/>
                    <LoginBtn>로그인</LoginBtn>
                    <UserInfos>아이디찾기 | 비밀번호찾기 | 회원가입</UserInfos>
                    <SmallLogo src={Logo} alt='스몰로고'/>
                    <CopyLogo src={CopyRight} alt='copyRight'/>
                </Box>
            </Frame>
        </Body>
    );
}

