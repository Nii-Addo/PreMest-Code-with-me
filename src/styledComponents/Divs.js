import styled from 'styled-components';

export const Searchbox=styled.input`
  width:300px;
  height:30px;
  border:1px solid palevioletred;
  border-radius:6px;
  padding:2px 16px;
  font-size: 1em;
  color:black;
`;

export const SearchButton=styled.button`
font-size: 1em;
border: 1px solid;
border-radius:6px;
display: block;
height:35px;
transition: all 0.2s ease-out 0s;
background-color:green;
color:white;
width:100px;

&:hover{
    border:1px solid ;
}
`;

export const CurrentWeather=styled.div`
    width:100%;
    height:95%;
`;

export const WeatherItem=styled.div`
  width:150px;
  height:20px;
  background-color: transparent;
  color:white;
  border:0.05px solid pink;
  font-size:0.8em;
  padding:4px;
  text-align: center;
  margin-right:4px;
`;

export const LoginButton=styled(SearchButton)`
  height: 30px;
  background-color:#eb612a;
`;

export const SignupButton=styled(SearchButton)`
  height: 30px;
  background:transparent;
  border-radius:0px;
  border:none;

  &hover{
    border-bottom:2px solid underline;
  }
`;

export const LogoutButton=styled(SearchButton)`
  height: 30px;
  background-color:gray;
`;
