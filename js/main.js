// /Task-1
function filteringArry(arr){
   return arr.filter((ele)=> ele % 2 === 0)
}
console.log(filteringArry([1,2,3,4,5,6,8]))


// Task2
function largestNumber(arr){
  return arr.reduce((acc,curr)=> acc>curr?acc:curr)
}
console.log(largestNumber([30,1,2,3,4,5,6,8,7,9,10,12]))

// Task3
let text = document.querySelector('input[type="text"]');
let sub = document.querySelector('input[type="submit"]');

sub.addEventListener('click',reversing)

function reversing(e){
    e.preventDefault()
    let inputresult=text.value
    let reversstring= inputresult.split('').reverse().join('')
    console.log(reversstring)
}
// task4
function removeDublicate(arr){
  let newarr=[...new Set(arr)]
  return newarr
  // or
  // let newarr=arr.filter((ele,i)=> arr.indexOf(ele) == i)
  // return newarr

}
console.log(removeDublicate([2,3,3,5,1,2,7,7]))
// 














