## AC 1：我們需要將金額乘上數量，並得到一個總金額

寫出一個測試，然後試圖讓他成功，這之中並不包含讓程式碼變得簡潔或是考慮其他副作用等問題  
為了達成這個 AC，我們首先考慮 _Todo 1-1：5 美元 * 2 = 10 美元_

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
   - 從測試可以看到，我們定義了一個 `Dollar` 類別，並預期它有一個 `times()` 方法和一個 `amount` 欄位
2. 在寫測試的過程中，我們會發現依照這樣的實作可能會有問題，先把這些問題都寫下來
   - 新增 _Todo 1-2：amount 欄位應為 private_
   - 新增 _Todo 1-3：Dollar 類別可能會有副作用_
   - 新增 _Todo 1-4：amount 欄位一定是整數嗎？_
3. 現在如果要**讓測試可以成功執行（結果不一定要正確）**，需要解決的問題是 2 ~ 5
4. 解決：`Dollar` 類別還不存在
   ```js
   class Dollar {}
   ```
5. 解決：建構式還不存在
   ```js
   class Dollar {
     constructor(amount) {}
   }
   ```
6. 解決：方法 `times()` 還不存在
   ```js
   class Dollar {
     constructor(amount) {}
     times(multiplier) {}
   }
   ```
7. 解決：`amount` 欄位還不存在
   ```js
   class Dollar {
     constructor(amount) {
       this.amount
     }
     times(multiplier) {}
   }
   ```
8. 執行測試會得到失敗的紅燈，我們期望結果是 10，但結果卻是 undefined，接著為了通過測試進行**最小幅度的改動**
   ```js
   class Dollar {
     constructor(amount) {
       this.amount = 10
     }
     times(multiplier) {}
   }
   ```
9.  將邏輯拆分，**消除重複**（eg. 在測試情境中寫的結果 10 和在建構式中寫死的 10 就是一種重複）
   ```js
   times(multiplier) {
     this.amount = 5 * 2
   }
   ```
10. 進一步**消除重複**（eg. 在測試情境中寫的 5 乘 2 和在 `times()` 方法中寫的 5 乘 2 也是一種重複）
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

---

統整剩下的 Todos：
- [x] Todo 1-1：5 美元 * 2 = 10 美元
- [ ] Todo 1-2：amount 欄位應為 private
- [ ] Todo 1-3：Dollar 類別可能會有副作用
- [ ] Todo 1-4：amount 欄位一定是整數嗎？