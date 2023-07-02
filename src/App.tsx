import "./App.css";
import Checkbox from "./api/checkbox";

import { useEffect, useState } from "react";
import { Population, Prefectures, SpotPrefectures } from "./types/type";
import Graph from "./api/graph";

function App() {
  // 都道府県のAPIを格納するstate
  const [prefecuture, setPrefecture] = useState<Prefectures[]>([]);
  // 選択された都道府県のAPIを格納するstate
  const [spotPrefecuture, setSpotPrefecture] = useState<SpotPrefectures[]>([]);
  // 選択された都道府県の人口APIを格納するstate
  const [spotPopulation, setSpotPopulation] = useState<Population[]>([]);
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
      // 選択した都道府県の ID,名前 をstate(spotPopulation)に格納する
      setSpotPrefecture([
        ...spotPrefecuture,
        { id: value.target.value, name: value.target.name },
      ]);
      // 人口推移のAPIを取得する
      fetch(`${import.meta.env.VITE_API_URL_POPULATION}=${value.target.id}`, {
        headers: {
          "X-API-KEY": import.meta.env.VITE_API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // 選択した都道府県の ID,人口推移データ をstate(spotPopulation)に格納する
          setSpotPopulation([
            ...spotPopulation,
            { id: value.target.id, data: data.result },
          ]);
        })
        .catch(() => alert("error"));
    }
    // チェックが外れたときの処理
    else {
      spotPrefecuture.splice(spotPrefecuture.indexOf(value.target.value), 1);
      spotPopulation.splice(spotPopulation.indexOf(value.target.value), 1);
    }
  };

  return (
    <>
      <h1>Title</h1>
      <h2>都道府県</h2>
      <Checkbox prefData={prefecuture} onChange={handleAddPrefecture} />
      <h2>人口推移グラフ</h2>
      <Graph prefData={spotPrefecuture} popData={spotPopulation} />
    </>
  );
}

export default App;
