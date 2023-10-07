import React from 'react';
import { Body, Frame, Box, ImgLogo, InputId, InputPwd, LoginBtn, UserInfos, SmallLogo, CopyLogo, UserInfo, Bar } from './styled.js';
import Logo from '../../../assets/Logo.svg';
import CopyRight from '../../../assets/CopyRight.svg';

export default function Modal() {
    return (
        <Body>
            <Frame>
                <Box>
                    <ImgLogo src={Logo} alt='로고'/>
                    <InputId placeHolder='아이디'/>
                    <InputPwd placeHolder='비밀번호' type='password'/>
                    <LoginBtn>로그인</LoginBtn>
                    <UserInfos>
                        <UserInfo>아이디찾기</UserInfo>
                        <Bar>|</Bar>
                        <UserInfo>비밀번호찾기</UserInfo>
                        <Bar>|</Bar>
                        <UserInfo>회원가입</UserInfo>
                    </UserInfos>
                    <SmallLogo src={Logo} alt='스몰로고'/>
                    <CopyLogo src={CopyRight} alt='copyRight'/>
                </Box>
            </Frame>
        </Body>
    );
}

