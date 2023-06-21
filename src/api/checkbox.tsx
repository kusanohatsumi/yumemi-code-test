import { useEffect, useState } from "react";

export default function Todouhuken() {
  const [state, setState] = useState([]);
  const url = " https://opendata.resas-portal.go.jp/api/v1/prefectures";
  useEffect(() => {
    fetch(url, {
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
                    onClick={() => console.log(doc.prefCode)}
                  />
                  <label htmlFor={doc.prefCode}>{doc.prefName}</label>
                </div>
              ))}
          {/* <button type="submit">比較する</button> */}
        </form>
      </div>
    </>
  );
}
