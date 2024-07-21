## AC 2：我們需要能支援以兩種不同幣別的金額相加，並根據匯率表資訊將結果轉換成某一種幣別

> 建立另一個類別專門處理貨幣物件的相加

終於來到加法，為了要「支援兩種不同幣別的金額相加」，因為這是一個新的主題，所以我們把 Todo List 清空並重新寫上一條：_Todo 2-1：當瑞士法郎與美元的匯率為 2:1 的時候，則 5 美元 + 10 瑞士法郎 = 10 美元_ 並開始處理它

1. 我們應該要先處理簡單的情況，也就是「相同幣別相加」的情況，先在 Todo List 加上一條 _Todo 2-2：5 美元 + 5 美元 = 10 美元_ 並開始寫測試
    ```js
    describe('test plus', () => {
      it('USD', () => {
        const five = Money.dollar(5)
        expect(Money.dollar(10).equals(five.plus(five))).toBe(true)
      })
    })
    ```
2. 為了滿足這個測試，我們會需要在 `Money` 類別中加入一個 `plus()` 方法，它會接收一個 `Money` 類別的物件並回傳相同類別的物件
    ```js
    plus(addend) {
      return new Money(this._amount + addend._amount, this._currency)
    }
    ```
> 接著我們要開始處理不同幣別的運算了，在多幣別運算的情況下，我們會試著採取一些做法
> - 把所有的幣值都先轉換成某個基準幣別。不過缺點是會使得貨幣不易改變
> - (preffered) 建立另一個擁有對外公開相同協議但實作內容不同的物件，當作一個替代品

3. 我們選擇建立 `Bank` 類別來處理不同物件的相加，首先先寫測試
    ```js
    describe('test plus', () => {
      it('USD', () => {
        const five = Money.dollar(5)
        const sum = five.plus(five)
        const bank = new Bank()
        const reduced = bank.reduce(sum, 'USD')
        expect(Money.dollar(10).equals(reduced)).toBe(true)
      })
    })
    ```
4. 為了以最小的步伐通過測試，我們只要讓 `reduced` 的內容等於一個數值為 10 的 `Dollar` 物件就行了，所以我們建立一個 `Bank` 的類別定義
    ```js
    class Bank {
      reduce(source, to) {
        return Money.dollar(10)
      }
    }
    ```

---

統整剩下的 Todos：

- [ ] Todo 2-1：當瑞士法郎與美元的匯率為 2:1 的時候，則 5 美元 + 10 瑞士法郎 = 10 美元
- [ ] Todo 2-2：5 美元 + 5 美元 = 10 美元