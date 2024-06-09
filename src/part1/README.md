# Part I：貨幣範例

在這個章節，我們會透過一個範例走過 TDD 的核心觀念

我們需要做的事如下：
- AC 1：我們需要能支援以兩種不同幣別的金額相加，並根據匯率表資訊將結果轉換成某一種幣別
  - [ch01](https://github.com/moneychien19/tdd-javascript/blob/main/src/part1/ch01)：寫出一個測試，然後試圖讓他成功
- AC 2：我們需要將金額乘上數量，並得到一個總金額