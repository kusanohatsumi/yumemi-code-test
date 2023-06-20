import { useEffect, useState } from "react";

export default function Todouhuken() {
  const [state, setState] = useState();
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
      <div className="japan">
        <h2>都道府県</h2>
      </div>
    </>
  );
}
