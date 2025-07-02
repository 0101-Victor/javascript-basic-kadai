// 2024年10月12日の形式で出力する
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

console.log(`${year}年${month}月${day}日`);
