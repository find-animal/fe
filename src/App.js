import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 외부 API 호출
    fetch('https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?upkind=417000&kind&upr_cd=6110000&org_cd=3040000&serviceKey=a7i0zyhL%2FQLdFGWHLmCqkIyaOfqNajSqIwL3iXsFJIFJYy7PVf%2F4eRCC3FrRQrMbhZqcOLrSpmd4vu0PLNPGAQ%3D%3D&neuter_yn&state&care_reg_no&_type=json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setItems(data.response.body.items.item);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
      <div className="App">
        <h1>Animal Shelter</h1>
        <ul>
          {items.map((item) => (
              <li key={item.desertionNo} style={{marginBottom: '20px'}}>
                <img src={item.filename} alt={item.kindCd} style={{width: '150px', height: '150px'}}/>
                <p><strong>Kind:</strong> {item.kindCd}</p>
                <p><strong>Place:</strong> {item.happenPlace}</p>
                <p><strong>Date:</strong> {item.happenDt}</p>
                <p><strong>Age:</strong> {item.age}</p>
                <p><strong>Weight:</strong> {item.weight}</p>
                <p><strong>Notice Period:</strong> {item.noticeSdt} - {item.noticeEdt}</p>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
