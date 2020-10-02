import React, { useContext } from "react";
import HistoryWeatherInfo from "../layouts/HistoryWeather";
import { HistoryContext } from "../../contexts/HistoryContext";
import "../../css/HistoryCss.css";
const AuthUserPage = (props) => {
  const historyContext = useContext(HistoryContext);
  return (
    <div>
      <h4 className="intro">Your previous searches</h4>
      {historyContext.searchHistory.map((history) => {
        return <HistoryWeatherInfo history={history} key={history.id} />;
      })}
    </div>
  );
};
export default AuthUserPage;
