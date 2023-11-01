/*
* 生成两个整数之间的随机整数，并且要包含这两个整数
*/
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
alert(Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(getRandom(1, 10));

/*
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr = ['许嵩', '邓紫棋', '毛不易', '解忧邵帅'];
const index = getRandom(0, arr.length - 1); // 生成随机的index
console.log(arr[index]); // 随机点名
*/