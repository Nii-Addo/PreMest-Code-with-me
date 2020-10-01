import styled from "styled-components";

export const Searchbox = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid palevioletred;
  border-radius: 6px;
  padding: 2px 16px;
  font-size: 1em;
  color: black;
`;

export const SearchButton = styled.button`
  font-size: 1em;
  border: 1px solid;
  border-radius: 6px;
  display: block;
  height: 35px;
  transition: all 0.2s ease-out 0s;
  background-color: green;
  color: white;
  width: 100px;

  &:hover {
    border: 1px solid;
  }
`;

export const CurrentWeather = styled.div`
  width: 100%;
  height: 95%;

  .basics {
    position: absolute;
    display: inline-flex;
    width: 100%;
    height: 40px;
  }

  .further-details {
    position: absolute;
    margin-left: 140px;
    width: 100%;
    display: flex;
    top: 30%;
    margin-top: 20px;
  }

  .further-details .img {
    position: absolute;
    width: 100%;
    height: 100%;
    margin-right: 10px;
  }

  .current-weather-icon {
    display: block;
  }

  .further-details-stats {
    position: absolute;
    left: 9%;
    margin-left: 36px;
    text-transform: capitalize;
    display: inline-flex;
  }

  .further-details-stats div {
    margin-right: 13px;
    font-weight: bold;
  }

  .alt {
    display: flex;
    position: absolute;
    top: 70%;
    margin-top: 30px;
    left: 0%;
    width: 100%;
  }
`;

export const HistoryWeather = styled(CurrentWeather)`
  background-color: var(--mainSilver);
  margin-left: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 450px;
  height: 150px;

  .history-details {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .history-details .img {
    width: 100%;
    height: 100%;
    margin-right: 12px;
  }

  .history-weather-icon {
    display: block;
  }

  .history-details-stats {
    margin-left: 6px;
    text-transform: capitalize;
    display: inline-block;
  }

  .history-details-stats div {
    margin-right: 16px;
    font-weight: bold;
  }

  .alt {
    display: flex;
    margin-top: 0px;
  }
`;

export const WeatherItem = styled.div`
  width: 150px;
  height: 20px;
  background-color: transparent;
  color: white;
  border: 0.05px solid pink;
  font-size: 0.8em;
  padding: 4px;
  text-align: center;
  margin-right: 4px;
`;

export const LoginButton = styled.button`
  height: 30px;
  width: 100px;
  font-size: 1em;
  border: 1px solid;
  border-radius: 6px;
  display: block;
  transition: all 0.2s ease-out 0s;
  color: white;
  background-color: #eb612a;

  &:hover {
    text-decoration: none;
  }
`;

export const SignupButton = styled(SearchButton)`
  height: 30px;
  background: transparent;
  border-radius: 0px;
  border: none;

  &hover {
    border-bottom: 2px solid underline;
  }
`;

export const HistoryButton = styled(SignupButton)``;

export const LogoutButton = styled(SearchButton)`
  height: 30px;
  background-color: gray;
`;
