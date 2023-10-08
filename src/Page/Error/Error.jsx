import React from 'react';
import { Body, Title, ErrorLogo } from './styled.js';
import ErrorImg from '../../assets/ErrorImg.svg';



export default function Error() {
    return (
        <Body>
            <ErrorMsg />
        </Body>
    );
}



const ErrorMsg = () => {
    return (
        <>
            <ErrorLogo src={ErrorImg} alt='에러 로고'/>
            <Title>
                뭔가 오류가 생겼어요!
            </Title>
        </>
    );
}



