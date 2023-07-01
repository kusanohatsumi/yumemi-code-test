import "./App.css";
import Checkbox from "./api/checkbox";

import { useEffect, useState } from "react";
import { Population, Prefectures } from "./types/type";

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
      setSpot_Prefectures([...prefecuture, value.target.value]);
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
          console.log(data.result);
        })
        .catch(() => alert("error"));
    }
    // チェックが外れたときの処理
    else {
      prefecuture.splice(prefecuture.indexOf(value.target.value), 1);
    }
  };

  return (
    <>
      <h1>Title</h1>
      <Checkbox prefData={prefecuture} onChange={handleAddPrefecture} />
    </>
  );
}

export default App;
