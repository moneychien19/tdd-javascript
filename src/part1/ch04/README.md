## AC 1：我們需要將金額乘上數量，並得到一個總金額

> 考慮私有性，過程中重構測試

在上一章中定義了一個比較相等性的方法之後，我們就可以回頭修改乘法部分的測試  
原本乘法的測試如下：
```js
describe('Dollar', () => {
  it('5 times 2 is 10, and times 3 is 15', () => {
    const five = new Dollar(5)
    let product = five.times(2)
    expect(product.amount).toBe(10)
    product = five.times(3)
    expect(product.amount).toBe(15)
  })
})
```
1. 在這個測試中，我們直接用 `product` 物件的 `amount` 屬性去和一個數字比較，但是我們真正要測試的其實是物件本身的功能是否正確，而且像是 `amount` 屬性應該要維持 private 比較好，不應該從外部直接使用，所以我們可以修改測試：
    ```js
    describe('Dollar', () => {
      it('5 times 2 is 10, and times 3 is 15', () => {
        const five = new Dollar(5)
        expect(new Dollar(10).equals(five.times(2))).toBe(true)
        expect(new Dollar(15).equals(five.times(3))).toBe(true)
      })
    })
    ```
2. 而在修改完測試後，也可以將 `amount` 屬性設成 private 了
   ```js
   class Dollar {
     #amount
     constructor(amount) {
       this.#amount = amount
     }
     times(multiplier) {
       return new Dollar(this.#amount * multiplier)
     }
     equals(dollar) {
       return this.#amount === dollar.#amount
     }
   }
   ```

---

統整剩下的 Todos：
- [x] Todo 1-1：5 美元 * 2 = 10 美元
- [x] Todo 1-2：amount 欄位應為 private
- [x] Todo 1-3：Dollar 類別可能會有副作用
- [ ] Todo 1-4：amount 欄位一定是整數嗎？
- [x] Todo 1-5：equals()（比較相等性的函數）
- [ ] Todo 1-6：hashCode()（如果有將 Dollar 當作 hash table 的 key 時）
- [ ] Todo 1-7：判斷是否與空值（null）相等
- [ ] Todo 1-8：判斷任何型別物件的相等