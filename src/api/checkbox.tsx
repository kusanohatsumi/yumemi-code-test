import { useEffect, useState } from "react";
import { Population, Prefectures } from "../types/type";

export default function Checkbox() {
  const [state, setState] = useState([]);
  const [prefecuture, setPrefecture] = useState<Prefectures[]>([]);
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
        setState(data.result);
      })
      .catch(() => alert("error"));
  }, []);

  // 選択した都道府県のIDをstateに格納する
  const handleAddPrefecture = (value: any) => {
    // チェックがついたときの処理
    if (value.target.checked === true) {
      setPrefecture([...prefecuture, value.target.value]);
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
      console.log(prefecuture);
    }
  };

  return (
    <>
      <div className="checkbox">
        <h2>都道府県</h2>
        <form>
          {state === undefined
            ? "Loading..."
            : state.map((doc: any) => (
                <div className="formItem" key={doc.prefCode}>
                  <input
                    type="checkbox"
                    id={doc.prefCode}
                    name={doc.prefName}
                    value={doc.prefCode}
                    onClick={handleAddPrefecture}
                  />
                  <label htmlFor={doc.prefCode}>{doc.prefName}</label>
                </div>
              ))}
        </form>
      </div>
    </>
  );
}
