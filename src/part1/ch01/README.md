## AC 1：我們需要能支援以兩種不同幣別的金額相加，並根據匯率表資訊將結果轉換成某一種幣別
1. 針對這個情境寫測試
   ```js
   describe('Dollar', () => {
     it('5 times 2 is 10', () => {
       const five = new Dollar(5)
       five.times(2)
       expect(five.amount).toBe(10)
     })
   })
   ```
   - 從測試可以看到，我們定義了一個 `Dollar` 類別，並預期它有一個 `times()` 方法和一個 `amount` 欄位，現在如果要**讓測試可以成功執行（結果不一定要正確）**，需要解決的問題是 2 ~ 5
2. 解決：`Dollar` 類別還不存在
   ```js
   class Dollar {}
   ```
3. 解決：建構式還不存在
   ```js
   class Dollar {
     constructor(amount) {}
   }
   ```
4. 解決：方法 `times()` 還不存在
   ```js
   class Dollar {
     constructor(amount) {}
     times(multiplier) {}
   }
   ```
5. 解決：`amount` 欄位還不存在
   ```js
   class Dollar {
     constructor(amount) {
       this.amount
     }
     times(multiplier) {}
   }
   ```
6. 執行測試會得到失敗的紅燈，我們期望結果是 10，但結果卻是 undefined，接著為了通過測試進行**最小幅度的改動**
   ```js
   class Dollar {
     constructor(amount) {
       this.amount = 10
     }
     times(multiplier) {}
   }
   ```
7. 將邏輯拆分，**消除重複**（eg. 在測試情境中寫的結果 10 和在建構式中寫死的 10 就是一種重複）
   ```js
   times(multiplier) {
     this.amount = 5 * 2
   }
   ```
8. 進一步**消除重複**（eg. 在測試情境中寫的 5 乘 2 和在 `times()` 方法中寫的 5 乘 2 也是一種重複）
   ```js
   class Dollar {
     constructor(amount) {
       this.amount = amount
     }
     times(multiplier) {
       this.amount *= multiplier
     }
   }
   ```
