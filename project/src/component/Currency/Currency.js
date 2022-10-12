import React, {useState, useEffect} from 'react';
import "./Currency.css";
export const Currency = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [curUSD, setUSD] = useState(0);
   
    useEffect(() => {
      fetch("https://www.cbr-xml-daily.ru/daily_json.js")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setUSD(result.Valute.USD.Value);
          },
          
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <p className="currency-text">Загрузка...</p>;
    } else {
      return (
        <p className="currency-text">1 USD = {Math.ceil(curUSD*100)/100} RUB</p>
      );
    }
  }
  


