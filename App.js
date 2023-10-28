import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function App() {
  const Wrapper = styled.section`
  background-color:gray;
  text-align:center;
  align-content:center;
  margin: 4px;
  padding: 50px;
  `;

  const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #BF4F74;
  margin:0;
`;

const Title2 = styled.h4`
  text-align: left;
  color: white;
  margin: 0px 50px;
`;

const Title3 = styled.p`
  text-align: left;
  color: white;
`;

const Box = styled.div`
background-color: black;
color: white;
width: 400px;
margin: auto;
padding: 25px 0px;
border-radius: 8px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width:70%;
`;

const Input2 = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: left; 
`;

const Div1 = styled.div`
display: flex;
// justify-content:;
margin:0px 46px;
`;

const Div2 = styled.div`
text-align:left;
flex-basis:50%;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #0077FF;
  margin-right: 20px;
  width:200px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledLink2 = styled.a`
  text-decoration: none;
  color: orange;
  text-align:right;
flex-basis:50%;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Button = styled.button`
color: white;
background-color:red;
font-size:17px;
padding:4px 17px;
border-radius: 5px;
margin-bottom: 4px;
cursor:pointer;
`;

  return (
    <Wrapper>
      <Box>
        <Title>Login</Title>
        <form>
          <Title2>Login ID</Title2>
          <Input type="text" placeholder="Username" /><br></br>
          <Title2>Password</Title2>
          <Input type="password" placeholder="Password" /><br></br>
          <Div1>
            <Input2 type="checkbox" />Remember Me <br></br>
            
            <StyledLink2 href="/">Change Password</StyledLink2>
          </Div1>
          <Div1>
          <Input2 type="checkbox" />Agree to<StyledLink href="/">Terms and  conditions</StyledLink></Div1> <br></br>
          <Button type="submit">Login</Button>
          <br></br>
          Dont have an Account? <StyledLink href="/">Register here</StyledLink>
        </form>
      </Box>
    </Wrapper>
  );
}

export default App;
