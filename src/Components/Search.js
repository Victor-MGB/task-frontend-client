import React, { useState } from "react";
import axios from "axios";
import "../Styles/Search.css";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    performSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  const performSearch = async () => {
    setLoading(true);

    try {
      const responses = await axios.get("/api/getStockData");
      setSearchResults(responses.data);
      
      const API_KEY = "YOUR_ALPHA_VANTAGE_API_KEY";
      const SYMBOL = searchQuery.toUpperCase();
      const API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${SYMBOL}&apikey=${API_KEY}`;

      const response = await axios.get(API_URL);
      const stockData = response.data["Time Series (Daily)"] || {};

      const searchData = Object.keys(stockData).map((date) => ({
        date,
        price: stockData[date]["4. close"], // Closing price for the day
      }));

      setSearchResults(searchData);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="topsearch">
      <div className="search-header">
        <h1>My Stock Price</h1>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Enter a stock symbol (e.g., AAPL)"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button type="button" onClick={handleSearchClick} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>

      <div className="searchResults">
        {searchResults.map((result, index) => (
          <div key={index} className="searchResultItem">
            <p>Date: {result.date}</p>
            <p>Price: ${result.price}</p>
          </div>
        ))}
      </div>

    </main>
  );
}

export default Search;
