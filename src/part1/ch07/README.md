## AC 2：我們需要能支援以兩種不同幣別的金額相加，並根據匯率表資訊將結果轉換成某一種幣別

> 判斷兩個類別的物件不應相同

1. 此時考慮 `Dollar` 和 `Franc` 兩個物件的相似性，似乎需要考慮到把兩者拿來比較不應該要相同，因此增加 _Todo 1-13：比較 `Dollar` 和 `Franc` 物件_ 並先寫測試
   ```js
   describe('Money', () => {
     it('test equality between Franc and Dollar', () => {
       expect(new Franc(5).equals(new Dollar(5))).toBe(false)
     })
   })
   ```
2. 這個測試會出錯，這代表實際上同樣數值的 `Dollar` 和 `Franc` 會被認為是相等，因此在 `equals()` 方法中加入對類別的判斷
   ```js
   class Money {
     _amount
     constructor(amount) {
       this._amount = amount
     }
     equals(money) {
       return (
         this._amount === money._amount &&
         this.constructor.name === money.constructor.name
       )
     }
   }
   ```
3. 此時測試通過
4. 但是我們更期望使用一種在金融領域中更有意義的判斷依據，而不是使用程式語言裡的型別來判斷。這個就先加入 _Todo 1-14：引入貨幣的概念_

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
- [ ] Todo 1-10：Dollar 和 Franc 之間的重複設計
- [X] Todo 1-11：共用的 `equals()` 方法
- [ ] Todo 1-12：共用的 `times()` 方法
- [X] Todo 1-13：比較 `Dollar` 和 `Franc` 物件
- [ ] Todo 1-14：引入貨幣的概念