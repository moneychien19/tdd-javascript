## AC 2：我們需要能支援以兩種不同幣別的金額相加，並根據匯率表資訊將結果轉換成某一種幣別

> 引入貨幣的概念，讓類別的宣告完全在父類別中進行

為了消除重複，我們可以考慮先進行 _Todo 1-14：引入貨幣的概念_
1. 此時先用字串來代表貨幣的種類，並先寫測試
    ```js
    it('test currency', () => {
      expect(Money.dollar(1).currency()).toBe('USD')
      expect(Money.franc(1).currency()).toBe('CHF')
    })
    ```
2. 為了滿足這個測試，首先我們在 `Money` 中寫一個 `currency()` 方法，並讓他回傳物件的 `currency` 屬性，而物件的 `currency` 屬性是在 `Dollar` 和 `Franc` 類別裡分別定義的
    ```js
    class Money {
      currency() {
        return this.currency
      }
    }
    class Dollar extends Money {
      constructor(amount) {
        super(amount)
        this.currency = 'USD'
      }
    }
    class Franc extends Money {
      constructor(amount) {
        super(amount)
        this.currency = 'CHF'
      }
    }
    ```
3. 我們需要把 USD 和 CHF 兩個字串的內容移到 `Money` 的靜態方法裡面，這樣就可以建立一個共同的實作內容，消除重複的部分
    ```js
    class Money {
      _amount
      _currency
      constructor(amount, currency) {
        this._amount = amount
        this._currency = currency
      }
      static dollar(amount) {
        return new Dollar(amount, 'USD')
      }
      static franc(amount) {
        return new Franc(amount, 'CHF')
      }
      currency() {
        return this._currency
      }
    }
    class Dollar extends Money {
      constructor(amount, currency) {
        super(amount, currency)
      }
    }
    class Franc extends Money {
      constructor(amount, currency) {
        super(amount, currency)
      }
    }
    ```
    這樣一來在建立 `Dollar` 和 `Franc` 物件時，只要傳入數額，`dollar()` 和 `franc()` 靜態方法會自動使用對應的貨幣概念去建立物件
4. 在實作的過程中我們發現 `times()` 方法都還是使用兩個子類別的建構式，而不是我們定義的靜態工廠方法，於是順便修改他們
    ```js
    class Dollar extends Money {
      constructor(amount, currency) {
        super(amount, currency)
      }
      times(multiplier) {
        return Money.dollar(this._amount * multiplier)
      }
    }
    class Franc extends Money {
      constructor(amount, currency) {
        super(amount, currency)
      }
      times(multiplier) {
        return Money.franc(this._amount * multiplier)
      }
    }
    ```

我們成功引入了貨幣的概念，接下來就可以繼續消除兩個子類別間的重複

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
- [x] Todo 1-14：引入貨幣的概念