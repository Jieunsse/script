import React, { useState } from 'react';
import { Body, Frame, Box, ImgLogo, InputId, InputPwd, LoginBtn, UserInfos, SmallLogo, CopyLogo, UserInfo, Bar } from './styled.js';
import Logo from '../../../assets/Logo.svg';
import CopyRight from '../../../assets/CopyRight.svg';
import { Link, useNavigate } from 'react-router-dom';


export default function Modal() {


    const [ userName, setUserName ] = useState('');
    const [ passWord, setPassWord ] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        userName === '' || passWord === '' ? navigate('/') : navigate('/home');
    };
    


    return (
        <Body>
            <Frame>
                <Box>
                    <ImgLogo src={Logo} alt='로고'/>
                    <InputId placeholder='아이디' value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    <InputPwd placeholder='비밀번호' type='password' value={passWord} onChange={(e) => setPassWord(e.target.value)}/>
                    <Link to={navigate}>
                        <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
                    </Link>
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

