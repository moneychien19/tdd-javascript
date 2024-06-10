## AC 1：我們需要將金額乘上數量，並得到一個總金額

調整物件中的方法，以沒有副作用的方式撰寫  
延續上一章節剩下的 Todos，我們來處理 _Todo 1-3：Dollar 類別可能會有副作用_

1. 觀察到 Dollar 可能有副作用，因此我們想要讓 `times()` 方法回傳一個新物件，而不是改變原本物件的值
2. 針對這個預想的情境寫一個測試
   ```js
   describe('Dollar', () => {
     it('5 times 2 is 10, and times 3 is 15', () => {
       const five = new Dollar(5)
       const product = five.times(2)
       expect(product.amount).toBe(10)
       expect(product.amount).toBe(15)
     })
   })
   ```
3. 如果要讓**讓測試可以成功執行（結果不一定要正確）**，需要調整 `Dollar` 的對外介面，讓 `times()` 方法回傳一個 `Dollar` 物件
   ```js
   times(multiplier) {
     this.amount *= multiplier
     return this
   }
   ```
4. 進一步讓 `times()` 方法回傳的物件帶有正確的屬性，以通過測試
   ```js
   times(multiplier) {
     return new Dollar(this.amount * multiplier)
   }
   ```

---

統整剩下的 Todos：
- [x] Todo 1-1：5 美元 * 2 = 10 美元
- [ ] Todo 1-2：amount 欄位應為 private
- [x] Todo 1-3：Dollar 類別可能會有副作用
- [ ] Todo 1-4：amount 欄位一定是整數嗎？