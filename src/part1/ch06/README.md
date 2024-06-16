## AC 2：我們需要能支援以兩種不同幣別的金額相加，並根據匯率表資訊將結果轉換成某一種幣別

> 建立共用的父類別，並將共用的方法移至父類別中

我們需要重構 Dollar 和 Franc，消除兩者之間的重複

1. 我們決定要創造一個父類別 `Money`，並讓 `Dollar` 和 `Franc` 都繼承這個共同的父類別

   ```js
   class Money {}
   ```
2. 首先先將 `amount` 屬性移到父類別中，但是為了要讓子類別可以存取此變數，因此將存取層級從 private 變為 protected，並確保這個改變並不會讓任何現有的測試不通過

   ```js
   class Money {
     _amount
     constructor(amount) {
       this._amount = amount
     }
   }

   class Dollar extends Money {
     constructor(amount) {
       super(amount)
     }
     times(multiplier) {
       return new Dollar(this._amount * multiplier)
     }
     equals(dollar) {
       return this._amount === dollar._amount
     }
   }

   class Franc extends Money {
     constructor(amount) {
       super(amount)
     }
     times(multiplier) {
       return new Franc(this._amount * multiplier)
     }
     equals(dollar) {
       return this._amount === dollar._amount
     }
   }
   ```
3. 既然 `amount` 屬性已經被移到父類別中了，我們也可以開始將 `equals()` 方法移到父類別中

   ```js

   class Money {
     _amount
     constructor(amount) {
       this._amount = amount
     }
     equals(money) {
       return this._amount === money._amount
     }
   }
   ```
4. 為了確保 `Dollar` 和 `Franc` 的 `equals()` 方法都可以被放入 `Money` 中，我們針對 `Money` 中的 `equals()` 方法寫測試，其實就是把原本在 `Dollar` 和 `Franc` 中的測試移到 `Money` 裡面

   ```js
   describe('Money', () => {
     it('test equality between Dollars', () => {
       expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
     })
     it('test inequality between Dollars', () => {
       expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
     })
     it('test equality between Franc', () => {
       expect(new Franc(5).equals(new Franc(5))).toBe(true)
     })
     it('test inequality between Franc', () => {
       expect(new Franc(5).equals(new Franc(6))).toBe(false)
     })
   })
   ```
5. 有了完整的測試後，我們就可以放心的把 `Dollar` 和 `Franc` 中的 `equals()` 方法都刪除了

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
