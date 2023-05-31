import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Standings = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://v3.football.api-sports.io/standings/", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "67cd41eae8f3eca693238aa2ff1cecfc"
      }
    })
    .then(response => response.json()) // Transforma a resposta em JSON
    .then(data => {
      setData(data.response.league);
      console.log(data.response.league) // Define apenas os dados relevantes no estado
    })
    .catch(err => {
      console.log(err);
    });
  }, []);
  
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get('https://api-football.com/standings?league=39&season=2019', {
    //       headers: {
    //         'x-rapidapi-host': 'v3.football.api-sports.io',
    //         'x-rapidapi-key': '67cd41eae8f3eca693238aa2ff1cecfc'
    //       }
    //     });
    //     setData(response);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchData();
  return (
    <div className="info">
      <div className="header">
        <nav>
          <ul>
            <div>
              <li><img src="./image/icons/caret-circle-down-1.svg" alt="" /></li>
            </div>
            <div className="header-ul-li-search-notification">
              <li><input type="search" name="" id="search" placeholder="time" /></li>
              <li><input type="search" name="" id="search" placeholder="year" /></li>
            </div>
          </ul>
        </nav>
      </div>
      <div className="section-add-new-question">
        <ul>
          <div>
            <li>Standings List</li>
          </div>
        </ul>
      </div>
      <div className="dividing-line"></div>
      <div className="main">
        {data ? (
          data.map((item) => (
            <div key={item.id}>
              <img src={item.flag} alt='' />
              <p>{item.name}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Standings;