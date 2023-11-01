//模拟日历
//需求：每天打开这个页面都能定时显示年月日和星期几
function getCurrentDate() {
    //1.创建一个当前日期的日期对象
    const date = new Date();
    //2.然后获取其中的年、月、日和星期
    const year = date.getFullYear();
    const month = date.getMonth();
    const hao = date.getDate();
    const week = date.getDay();
    //        console.log(year+" "+month+" "+hao+" "+week);
    //3.赋值给div
    const arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const div = document.getElementsByTagName('div')[0];
    return '今天是：' + year + '年' + (month + 1) + '月' + hao + '日 ' + arr[week];
}
const div = document.getElementsByTagName('div')[0];
//获取页面内第一个标签名为div的标签，使js中定义的div获取它的地址
div.innerText = getCurrentDate();
//在获取页面标签地址后，在这一标签内嵌入文本，文本内容即getCurrentDate()的返回值。