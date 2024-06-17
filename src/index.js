import ReturnA from './file-a'
import ReturnB from "./file-b";

function callAB() {
  const a = ReturnA()
  const b = ReturnB()

  console.log(a, b)
}

callAB()
