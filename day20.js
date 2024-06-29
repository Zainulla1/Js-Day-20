// Difeerence  Between map vs ForEach Differance

const arrNum = [1, 2, 3, 4, 5];
const mapMethod=arrNum.map((res)=> {
    return res+3
})
const foreachMethod=arrNum.forEach((res,i)=> {
    arrNum[i]=res+7
})
console.log(mapMethod,foreachMethod);