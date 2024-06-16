## AC 2：我們需要能支援以兩種不同幣別的金額相加，並根據匯率表資訊將結果轉換成某一種幣別

> 開始考慮不同幣別要如何處理

在試著處理這個 AC 時，會發現我們需要定義「不同幣別」的處理方式，像是我們可能會需要一個類似像 Dollar 的物件表示「法郎」而非「美金」

1. 為了確保我們可以處理不同的幣別，先增加並開始處理 _Todo 1-9：5 法郎 * 2 = 10 法郎_
2. 我們將 Dollar 的測試複製過來修改
   ```js
   describe('Franc', () => {
     it('test equality between Franc', () => {
       expect(new Franc(5).equals(new Franc(5))).toBe(true)
     })
     it('test inequality between Dollars', () => {
       expect(new Franc(5).equals(new Franc(6))).toBe(false)
     })
     it('5 times 2 is 10, and times 3 is 15', () => {
       const five = new Franc(5)
       expect(new Franc(10).equals(five.times(2))).toBe(true)
       expect(new Franc(15).equals(five.times(3))).toBe(true)
     })
   })
   ```
3. 著手完成 `Franc` 類別，最簡單的方式就是將 `Dollar` 類別複製過來改名
4. 完成了 _Todo 1-9：5 法郎 * 2 = 10 法郎_，但是為了消除重複，新增了另外三項 Todo：
   - _Todo 1-10：Dollar 和 Franc 之間的重複設計_
   - _Todo 1-11：共用的 `equals()` 方法_
   - _Todo 1-12：共用的 `times()` 方法_

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
- [ ] Todo 1-11：共用的 `equals()` 方法
- [ ] Todo 1-12：共用的 `times()` 方法
