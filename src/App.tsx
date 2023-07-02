import "./App.css";
import Checkbox from "./api/checkbox";

import { useEffect, useState } from "react";
import { Prefectures, SpotPopulation, SpotPrefectures } from "./types/type";
import Graph from "./api/graph";

function App() {
  // 都道府県のAPIを格納するstate
  const [prefecuture, setPrefecture] = useState<Prefectures[]>([]);
  // 選択された都道府県のAPIを格納するstate
  const [spotPrefecuture, setSpotPrefecture] = useState<SpotPrefectures[]>([]);
  // 選択された都道府県の人口APIを格納するstate
  const [spotPopulation, setSpotPopulation] = useState<SpotPopulation[]>([]);
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
  const handleAddPrefecture = (eve: any) => {
    // チェックがついたときの処理
    if (eve.target.checked === true) {
      // 選択した都道府県の ID,名前 をstate(spotPopulation)に格納する
      setSpotPrefecture([
        ...spotPrefecuture,
        { id: eve.target.id, name: eve.target.name },
      ]);

      // 人口推移のAPIを取得する
      fetch(`${import.meta.env.VITE_API_URL_POPULATION}=${eve.target.id}`, {
        headers: {
          "X-API-KEY": import.meta.env.VITE_API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setSpotPopulation([
            {
              prefName: eve.target.name,
              data: data.result.data[0].data,
            },
          ]);
        })

        .catch(() => alert("error"));
    }
    // チェックが外れたときの処理
    else {
      spotPrefecuture.splice(spotPrefecuture.indexOf(eve.target.value), 1);
      spotPopulation.splice(spotPopulation.indexOf(eve.target.value), 1);
    }
  };

  const type = [
    {
      id: "0",
      name: "総人口",
    },
    {
      id: "1",
      name: "年少人口",
    },
    {
      id: "2",
      name: "生産年齢人口",
    },
    {
      id: "3",
      name: "老年人口",
    },
  ];

  console.log(prefecuture);

  return (
    <>
      <h1>総人口推移グラフ</h1>
      <div className="container">
        <div className="contents">
          <h2>都道府県</h2>
          {prefecuture && (
            <Checkbox prefData={prefecuture} onChange={handleAddPrefecture} />
          )}

          <div className="prefUi">
            {type.map((item) => (
              // ここをクリックして各人口のuiに変更させようとした
              <button key={item.id} id={item.id} name={item.name}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="contents">
          <h2>グラフ</h2>
          <Graph populationData={spotPopulation} />
        </div>
      </div>
    </>
  );
}

export default App;
