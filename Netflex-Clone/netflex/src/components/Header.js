import React from 'react'
import styled from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LanguageIcon from '@material-ui/icons/Language';
function Header() {
    return (
        <Container>

            <NetLogo>
                <img src="/images/logo.svg" alt="" />
            </NetLogo>

            <RightMenuContainer>
                <LangageBtn><span><LanguageIcon fontSize="small" />English<ArrowDropDownIcon fontSize="small" /></span></LangageBtn>
                <SignInBtn><span>Sign In</span></SignInBtn>
            </RightMenuContainer>

        </Container>
    )
}

export default Header
const Container = styled.div`
height:70px;
padding:5px 10px;
position:absolute;
display:flex;
align-items:center;
justify-content:space-between;
top:0;
right:0;
left:0;
z-index:1;
`
const NetLogo = styled.div`
padding:15px 15px;
img{
    width:150px;
    height:35px;
}
`

const RightMenuContainer = styled.div`
display:flex;
align-items:center;
margin-right:30px;
`
const LangageBtn = styled.div`
text-align:center;
border:1px solid #aaa;
border-radius:4px;
background:rgba(0,0,0,0.2);
padding:5px 10px;
cursor:pointer;
span{
color:white;
display:flex;
align-items:center;

}

`
const SignInBtn = styled.div`
margin-left:20px;
padding:5px 15px;
cursor:pointer;
background-color:#e50914;
border-radius:4px;
span{
    color:white;
    //font-weight:500;
}
`
