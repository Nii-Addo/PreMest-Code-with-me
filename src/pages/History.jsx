import React, { useContext } from "react";
import PropTypes from "prop-types";
import { HistoryContext } from "../HistoryContext";
import withAuthorizedUser from "../layouts/WithAuthorizedUser";
import AuthUserPage from "../layouts/AuthUserPage";
import "../css/HomeCss.css";
import HistoryWeatherInfo from "../layouts/HistoryWeather";

const History = (props) => {
  const historyContext = useContext(HistoryContext);
  const DisplayAuthContent = withAuthorizedUser(AuthUserPage);
  return (
    <div>
      <div>
        {historyContext.searchHistory.length === 0 ? (
          <div className="authenticated-content">
            <div>
              <center>
                <h4>Hi,You did not search for any city's weather</h4>
                <div>
                  Search you city of interest and get you history here when you
                  need it
                </div>
              </center>
            </div>
          </div>
        ) : (
          <div className="authenticated-content">
            <DisplayAuthContent />
          </div>
        )}
      </div>
      <div>
        <h1 className="brand-display">Live-Weather</h1>
      </div>
    </div>
  );
};

export default History;
/*

*/
