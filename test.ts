function getFirstNumber(arr: number[]): number {
  return arr[0];
}

console.log(getFirstNumber([1, 2, 3])); // ✅ 정상 작동
console.log(getFirstNumber(["a", "b", "c"])); // ❌ 에러 발생!
