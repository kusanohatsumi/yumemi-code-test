import { set } from "firebase/database";
import { useEffect, useState } from "react";

export default function Graph(props: any) {
  const [population, setPopulation] = useState([]);
  console.log(props);
  // if (props === "") {
  //   console.log("空です");
  // } else {
  //   console.log("空ではありません");
  // }

  return <>{/* グラフ描画領域 */}</>;
}
