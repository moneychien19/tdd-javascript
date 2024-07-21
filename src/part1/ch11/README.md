## AC 2：我們需要能支援以兩種不同幣別的金額相加，並根據匯率表資訊將結果轉換成某一種幣別

> 在子類別只剩下建構式時，移除子類別

現在兩個子類別的內容都只剩下建構式了，一個只有建構式的類別不足以證明它有存在的必要，所以我們希望能刪除這兩個子類別

把參考子類別的地方直接改為參考父類別並確保測試全部通過，之後就可以刪除 `Dollar` 和 `Franc` 兩個子類別了
```js
class Money {
  static dollar(amount) {
    return new Money(amount, 'USD')
  }
  static franc(amount) {
    return new Money(amount, 'CHF')
  }
}
```

這樣我們就成功消除了 _Todo 1-10：Dollar 和 Franc 之間的重複設計_

---

統整剩下的 Todos：

- [X] Todo 1-1：5 美元 * 2 = 10 美元
- [X] Todo 1-2：amount 欄位應為 private
- [X] Todo 1-3：Dollar 類別可能會有副作用
- [ ] Todo 1-4：amount 欄位一定是整數嗎？
- [X] Todo 1-5：equals()（比較相等性的函數）
- [ ] Todo 1-6：hashCode()（如果有將 Dollar 當作 hash table 的 key 時）
- [ ] Todo 1-7：判斷是否與空值（null）相等
- [ ] Todo 1-8：判斷任何型別物件的相等
- [X] Todo 1-9：5 法郎 * 2 = 10 法郎
- [x] Todo 1-10：Dollar 和 Franc 之間的重複設計
- [X] Todo 1-11：共用的 `equals()` 方法
- [x] Todo 1-12：共用的 `times()` 方法
- [X] Todo 1-13：比較 `Dollar` 和 `Franc` 物件
- [x] Todo 1-14：引入貨幣的概念