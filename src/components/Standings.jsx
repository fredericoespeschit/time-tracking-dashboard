import { useEffect, useState } from 'react';
import axios from 'axios';

const Standings = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://v3.football.api-sports.io/standings?league=40&season=2019", {
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "67cd41eae8f3eca693238aa2ff1cecfc"
          }
        });
        const matchesList = response.data['response'];
        setData(matchesList);
        console.log(matchesList);
      } catch (err) {
        console.log(err);
      }
    };

    if (data === null) {
      fetchData();
    }
  }, [data]);

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
          data.map((item, index) => (
            // console.log(item)
            <div key={index}>
              <img src={item.league.flag} alt='' />
              <p>{item.league.name}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Standings;
