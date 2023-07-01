import "./App.css";
import Checkbox from "./api/checkbox";

import { useEffect, useState } from "react";
import { Population, Prefectures } from "./types/type";
import Graph from "./api/graph";

function App() {
  const [prefecuture, setPrefecture] = useState<Prefectures[]>([]);
  const [spot_prefecuture, setSpot_Prefectures] = useState<Prefectures[]>([]);

  const [population, setPopulation] = useState<Population[]>([]);

  // 都道府県のAPIを取得する
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL_PREFECUTURE, {
      headers: {
        "X-API-KEY": import.meta.env.VITE_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPrefecture(data.result);
      })
      .catch(() => alert("error"));
  }, []);

  // 選択した都道府県のIDをstateに格納する
  const handleAddPrefecture = (value: any) => {
    // チェックがついたときの処理
    if (value.target.checked === true) {
      setSpot_Prefectures([...spot_prefecuture, value.target.value]);
      console.log([...spot_prefecuture, value.target.value]);

      // console.log(new Set([...prefecuture, value.target.value]));

      // 人口のAPIを取得する
      fetch(`${import.meta.env.VITE_API_URL_POPULATION}=${value.target.id}`, {
        headers: {
          "X-API-KEY": import.meta.env.VITE_API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPopulation(data.result);
        })
        .catch(() => alert("error"));
    }
    // チェックが外れたときの処理
    else {
      spot_prefecuture.splice(spot_prefecuture.indexOf(value.target.value), 1);
      console.log(spot_prefecuture);
    }
  };

  return (
    <>
      <h1>Title</h1>
      <h2>都道府県</h2>
      <Checkbox prefData={prefecuture} onChange={handleAddPrefecture} />
      <h2>人口推移グラフ</h2>
      <Graph popData={population} />
    </>
  );
}

export default App;
