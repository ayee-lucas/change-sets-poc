import ReturnA from './packages/file-a'
import ReturnB from "./packages/file-b";

function callAB() {
  const a = ReturnA()
  const b = ReturnB()
}

callAB()
