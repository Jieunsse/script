import styled from 'styled-components';


export const Body = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;

    display: flex;
    justify-content: center;
    background: #FFF;
`;

export const Frame = styled.div`
    margin-top: 250px;
`;

export const Box = styled.div`
    width: 255px;
    height: 155px;
    padding: 20px 18px 20px 0px;
    

    border: 1px solid #000;
    border-width: 0.6px;
    border-radius: 5px;
    background: #FFF;
`;

export const InputId = styled.input`
    width: 250px;
    height: 30px;
    margin: 15px 15px 15px 10px;

    display: flex;
    align-items: center;

    border-radius: 1px;
    border: none;
    background: #EFEFEF;

   &:focus {
    outline: 1px solid #1876FB;
   }

    &::placeholder {
        font-size: 13px;
        padding-left: 5px;
        font-weight: semi-bold;
    }
`;

export const InputPwd = styled.input`
    width: 250px;
    height: 31px;
    margin: -10px 15px 15px 10px;
    
    display: flex;
    align-items: center;

    border-radius: 1px;
    border: none;
    background: #EFEFEF;

    &:focus {
        outline: 1px solid #1876FB;
    }

    &::placeholder {
        padding-left: 5px;
        font-weight: semi-bold;
        font-size: 13px;
    }
`;


export const LoginBtn = styled.button`
    width: 253px;
    height: 31px;
    margin: -5px 15px 15px 10px;


    border-radius: 1px;
    border: none;
    color: #FFF;
    background: #1876FB;
    font-weight: bold;
`;


export const UserInfos = styled.div`
    margin-top: 2.5px;
    margin-left: 40px;

    color: rgba(161, 161, 161, 0.70);
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 2px;
`;


export const ImgLogo = styled.img`
    margin-left: 70px;
    margin-bottom: 10px;
`;

export const SmallLogo = styled.img`
    width: 70px;
    height: 16px;

    margin-top: 40px;
    margin-left: 70px;
    margin-bottom: 10px;
`;


export const CopyLogo = styled.img`
    height: 8px;
    margin: 10px 10px 10px 5px;
`;