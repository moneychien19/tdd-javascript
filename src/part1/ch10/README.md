## AC 2：我們需要能支援以兩種不同幣別的金額相加，並根據匯率表資訊將結果轉換成某一種幣別

> 將另一個共用的方法移至父類別中

1. 為了處理 _Todo 1-12：共用的 `times()` 方法_，我們先試著將貨幣的概念引入 `times()` 方法中
    ```js
    class Dollar extends Money {
      times(multiplier) {
        return new Dollar(this._amount * multiplier, this._currency)
      }
    }

    class Franc extends Money {
      times(multiplier) {
        return new Franc(this._amount * multiplier, this._currency)
      }
    }
    ```
2. 現在兩者幾乎長的一樣了，只差在回傳的類別不同，現在我們可以試著將兩者回傳的類別都改成 `Money`。這時就會發現原本寫的測試錯了，以這個測試為例：
    ```js
    describe('Dollar', () => {
      it('5 times 2 is 10, and times 3 is 15', () => {
        const five = Money.dollar(5)
        expect(Money.dollar(10).equals(five.times(2))).toBe(true)
      })
    })
    ```
    原因在於在原本的測試中，`equals()` 方法會去比較兩個物件的類別，
    - 透過 `Money.dollar()` 方法建立的物件類別會是 `Dollar`
    - 透過 `Dollar.times()` 方法回傳的物件類別會是 `Money`
3. 因此我們的下一步就是要修改 `equals()` 方法，讓它用貨幣概念，而不是類別去比較
    ```js
    class Money {
      equals(money) {
        return (
          this._amount === money._amount &&
          this._currency === money._currency
        )
      }
    }
    ```
4. 現在我們可以確保原本的測試通過，且兩個子類別的實作都完全相同，因此可以拉到父類別上
    ```js
    class Money {
      times(multiplier) {
        return new Money(this._amount * multiplier, this._currency)
      }
    }
    ```
5. 原本存在在子類別中的針對 `times()` 方法的測試也可以拉到父類別
    ```js
    describe('Money', () => {
      describe('test times', () => {
        it('USD', () => {
          const five = Money.dollar(5)
          expect(Money.dollar(10).equals(five.times(2))).toBe(true)
          expect(Money.dollar(15).equals(five.times(3))).toBe(true)
        })
        it('CHF', () => {
          const five = Money.franc(5)
          expect(Money.franc(10).equals(five.times(2))).toBe(true)
          expect(Money.franc(15).equals(five.times(3))).toBe(true)
        })
      })
    })
    ```

這時我們就消除了 `Dollar` 和 `Franc` 在 `times()` 方法中的重複設計

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
- [x] Todo 1-12：共用的 `times()` 方法
- [X] Todo 1-13：比較 `Dollar` 和 `Franc` 物件
- [x] Todo 1-14：引入貨幣的概念