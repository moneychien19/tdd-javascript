## AC 1：我們需要將金額乘上數量，並得到一個總金額

> 分析 `Dollar` 物件的隱含意義，並為他打造需要的方法  

我們在上一章中把 `Dollar` 當作數值物件來使用，他有幾個隱含意義：
- 一旦值透過建構式設定到物件執行個體中，這個值就不允許再被改變。如果需要一個不同值的物件，就另外建立一個全新的物件
- 所有從數值物件的操作都要回傳一個新的物件

像是我們會用 `const five = new Dollar(5)` 來定義一個數值為 5 的 `Dollar` 物件，而 `Dollar` 之間無法簡單的透過 `===` 來比較，因此我們需要自定義數值物件之間的相等性

1. 新增 _Todo 1-5：equals()（比較相等性的函數）_ 並先針對他寫一個測試
   ```js
   describe('Dollar', () => {
     it('test equality between Dollars', () => {
       expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
     })
   })
   ```
2. 用最小的工先讓測試通過的方式：寫一個永遠都會回傳 true 的 `equals()` 方法
   ```js
   equals() {
     return true
   }
   ```
3. 將寫死的結果轉換為真正帶有商業邏輯的解決方法，可以使用 [**三角定位法（Triangulation）**](https://zh.wikipedia.org/zh-tw/%E4%B8%89%E8%A7%92%E6%B8%AC%E9%87%8F)：使用另一個角度寫測試情境（eg. 第一個測試情境是驗證結果為 true，那就讓第二個測試情境是驗證結果為 false）
   ```js
   it('test inequality between Dollars', () => {
     expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
   })
   ```
4. 為了讓這個測試通過，就會需要修正 `equals()` 方法的邏輯
   ```js
   equals(dollar) {
     return this.amount === dollar.amount
   }
   ```
5. 完成後我們會發現一些其他的問題，都先加入 Todos 中：
   - 新增 _Todo 1-6：hashCode()（如果有將 Dollar 當作 hash table 的 key 時）_
   - 新增 _Todo 1-7：判斷是否與空值（null）相等_
   - 新增 _Todo 1-8：判斷任何型別物件的相等_

---

統整剩下的 Todos：
- [x] Todo 1-1：5 美元 * 2 = 10 美元
- [ ] Todo 1-2：amount 欄位應為 private
- [x] Todo 1-3：Dollar 類別可能會有副作用
- [ ] Todo 1-4：amount 欄位一定是整數嗎？
- [x] Todo 1-5：equals()（比較相等性的函數）
- [ ] Todo 1-6：hashCode()（如果有將 Dollar 當作 hash table 的 key 時）
- [ ] Todo 1-7：判斷是否與空值（null）相等
- [ ] Todo 1-8：判斷任何型別物件的相等