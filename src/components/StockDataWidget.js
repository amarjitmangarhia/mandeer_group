import React, { useState, useEffect } from 'react';
import './StockDataWidget.css';

const StockDataWidget = ({ data }) => {
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const dates = data.map(obj => obj.date);

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return formattedDate.toLocaleDateString(undefined, options);
  };

  const handleNextClick = () => {
    if (currentDateIndex < dates.length - 1) {
      setCurrentDateIndex(currentDateIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentDateIndex > 0) {
      setCurrentDateIndex(currentDateIndex - 1);
    }
  };

  return (
    <div className="stock-widget">
      {dates.length > 0 && (
        <>
          <div className="stock-entry">
            <h2>{formatDate(dates[currentDateIndex])}</h2>
            <ul>
              <li>Open: {data[currentDateIndex]['1. open']}</li>
              <li>High: {data[currentDateIndex]['2. high']}</li>
              <li>Low: {data[currentDateIndex]['3. low']}</li>
              <li>Close: {data[currentDateIndex]['4. close']}</li>
              <li>Volume: {data[currentDateIndex]['5. volume']}</li>
            </ul>
          </div>

          <div className="navigation-buttons">
            <button className="button" onClick={handlePrevClick}>
              Previous
            </button>
            <button className="button" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StockDataWidget;
