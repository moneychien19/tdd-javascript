## AC 2：我們需要能支援以兩種不同幣別的金額相加，並根據匯率表資訊將結果轉換成某一種幣別

> 建立運算式物件處理相加

1. 我們希望兩個 `Money` 物件的相加總和是一個 `Sum` 物件，因此先對它寫一個對應的測試
    ```js
    it('USD, plus returns Sum', () => {
      const five = Money.dollar(5)
      const sum = five.plus(five)
      expect(five).toEqual(sum.augend)
      expect(five).toEqual(sum.addend)
    })
    ```
2. 實作 `Sum` 類別
    ```js
    class Sum {
      constructor(augend, addend) {
        this.augend = augend
        this.addend = addend
      }
    }
    ```
3. 此時測試不通過，因為依照原本的程式碼，`plus()` 方法會回傳一個 `Money` 物件，而這個物件裡並不包含 `Sum` 物件裡應該有的 `augend` 和 `addend` 屬性。因此我們修改 `plus()` 方法，讓它可以回傳 `Sum` 物件
    ```js
    class Money {
      plus(addend) {
        return new Sum(this, addend)
      }
    }
    ```
4. 在確保 `Sum` 的作用後，就可以來測試 `Bank.reduce()` 了
    ```js
    it('USD, reduce sum', () => {
      const five = Money.dollar(5)
      const sum = five.plus(five)
      const bank = new Bank()
      const reduced = bank.reduce(sum, 'USD')
      expect(Money.dollar(10).equals(reduced)).toBe(true)
    })
    ```
5. 依照測試，`Bank.reduce()` 的程式碼應該要修正成如下：
    ```js
    class Bank {
      reduce(source, to) {
        const amount = source.augend._amount + source.addend._amount
        return new Money(amount, to)
      }
    }
    ```

---

統整剩下的 Todos：

- [ ] Todo 2-1：當瑞士法郎與美元的匯率為 2:1 的時候，則 5 美元 + 10 瑞士法郎 = 10 美元
- [ ] Todo 2-2：5 美元 + 5 美元 = 10 美元