株式会社ゆめみ
フロントエンドコーディング試験

・GitHub 運用には GitHubflow を利用して作業を進める

・時間
53h09m

・これまでの総合的なプログラミング歴＆これまでの WEB フロントエンドプログラミング歴
約 2 年 2 ヶ月

---以下参考にしたリンク記載---

・ESlint を学習する際に参考にしたサイト
-ESLint と Prettier の使い方(静的検証, スタイル統一)
https://www.wakuwakubank.com/posts/716-javascript-eslint-prettier/

・都道府県の API を取得する際に参考にしたサイト
-React + Highcharts で都道府県の人口をグラフで表示するアプリ
https://zenn.dev/shimapon3/articles/13e3d4b147742c

・データを格納する際に苦戦したので useState について改めて調べた
-React で useState の値が更新されない仕様を理解する
https://zenn.dev/takuty/articles/c032310a6643ac
-useState の空配列に型をつける
https://zenn.dev/kaz_z/articles/usestate-type

・値が重複するのを防ぐために行った処理 -【React】JavaScript の Set を使って配列の重複削除して、ユニークな値だけを抽出する方法
https://devsakaso.com/react-remove-duplicates-in-array-and-get-unique-values/

・rechart.js を使用する際に参考にしたサイト -【React + Typescript】Recharts のグラフをカスタマイズする
https://zenn.dev/acha_n/articles/how-to-customize-recharts

・難しかったところ、頑張ったところ
グラフに複数のデータを描画するところで、データの保存がうまくいかずできなかった。
それでも 1 つのデータは保存して描画するところまではできた。

最後、vercel にデプロイするときに、ローカルでは動いていた fetch がうまく動かず修正するのが難しかった。
よくよくみると、環境変数が取得できていなかったことが原因だったため、本番環境で動く env ファイルを追加したところ
無事、都道府県の一覧が描画された。

・こだわったところ
都道府県の一覧とグラフを左右に置き、１画面で見たい情報が見れるように考えた。
