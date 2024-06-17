---
"change-sets-poc": patch
---

# Add console.log

```js
function callAB() {
    const a = ReturnA()
    const b = ReturnB()

    console.log(a, b) <---- added
}

callAB()

```
