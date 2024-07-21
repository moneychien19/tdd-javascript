## AC 2：我們需要能支援以兩種不同幣別的金額相加，並根據匯率表資訊將結果轉換成某一種幣別

> 減少對子類別的參考以消除重複設計

1. 下一步是要消除 _Todo 1-10：Dollar 和 Franc 之間的重複設計_，首先要做的就是減少對於子類別的參考。將 `Dollar` 和 `Franc` 物件的建立改為使用工廠方法，我們希望達成的效果為：
    ```js
    describe('Dollar', () => {
      it('5 times 2 is 10, and times 3 is 15', () => {
        const five = Money.dollar(5)
        expect(Money.dollar(10).equals(five.times(2))).toBe(true)
        expect(Money.dollar(15).equals(five.times(3))).toBe(true)
      })
    })
    ```
    其中 `Dollar` 的定義是由 `Money` 中的一個靜態方法負責
2. 而這個 `dollar()` 靜態方法可以這樣實作
    ```js
    class Money {
      static dollar(amount) {
        return new Dollar(amount)
      }
    }
    ```
    如此一來任何呼叫端都不知道存在一個 `Dollar` 子類別，透過消除測試程式與子類別之間直接相依的耦合，我們就可以比較自由改變繼承關係而不對程式碼造成任何影響
3. `Franc` 的實作也和 `Dollar` 很像，在 `Money` 中定義一個 `franc()` 的靜態方法，讓呼叫端直接呼叫它來建立一個 `Franc` 物件
    ```js
    class Money {
      static franc(amount) {
        return new Franc(amount)
      }
    }
    ```

本章只先將子類別的宣告方法搬到父類別上，還未完全消除重複，下章會繼續進行

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