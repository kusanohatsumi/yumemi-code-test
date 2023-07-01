import "./App.css";

import { useEffect, useState } from "react";
import Graph from "./api/graph";

function App() {
  const [state, setState] = useState([]);
  const [fetchData, setFetchData] = useState("");

  // APIから都道府県の一覧データを取得

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL, {
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

  return (
    <>
      <h1>Title</h1>

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
                    onChange={() => {
                      // 人口構成のデータをコンソールに表示
                      setFetchData(
                        import.meta.env.VITE_API_URL_POPULATION + doc.prefCode
                      );
                    }}
                  />
                  <label htmlFor={doc.prefCode}>{doc.prefName}</label>
                </div>
              ))}
        </form>
        <Graph props={fetchData} />
      </div>
    </>
  );
}

export default App;
