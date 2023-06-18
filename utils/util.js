function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

function toDate(number) {
    var date = new Date(number);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    // return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;//年月日时分秒
    return m + '-' + d + ' ' + h + ':' + minute;
}

function dateFormat(dateStr, pattern = 'yyyy-mm-dd') {
    var dt = new Date(dateStr);
    // yyyy-mm-dddd
    var y = dt.getFullYear();
    var m = dt.getMonth() + 1;
    var d = dt.getDate();

    if (pattern && pattern.toLowerCase() == 'yyyy-mm-dd') {
        return `${y} - ${m} - ${d} ${hh}:${mm}:${ss}`;
    } else {
        var hh = dt.getHours();
        var mm = dt.getMinutes();
        var ss = dt.getSeconds();
        return `${y} ${m} ${d} ${hh}:${mm}:${ss}`;
    }
}

function formatDate(time) {
    //时间戳转日期
    let date = new Date(time);
    let y = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM < 10 ? '0' + MM : MM;
    let d = date.getDate();
    d = d < 10 ? '0' + d : d;
    let h = date.getHours();
    h = h < 10 ? '0' + h : h;
    let m = date.getMinutes();
    m = m < 10 ? '0' + m : m;
    let s = date.getSeconds();
    s = s < 10 ? '0' + s : s;
    // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
    return MM + '-' + d + ' ' + h + ':' + m + ':' + s;
    // return y + '-' + MM + '-' + d;
}
/**
 * 时间戳转化为年 月 日 时 分 秒
 * number: 传入时间戳
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致
 */
function formatTimeTwo(number, format) {

    var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
    var returnArr = [];

    var date = new Date(number * 1000);
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));

    returnArr.push(formatNumber(date.getHours()));
    returnArr.push(formatNumber(date.getMinutes()));
    returnArr.push(formatNumber(date.getSeconds()));

    for (var i in returnArr) {
        format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var ext = img.substring(img.lastIndexOf(".")+1).toLowerCase();
    var dataURL = canvas.toDataURL("image/"+ext);
    return dataURL;
}
  // base64图片转file的方法（base64图片, 设置生成file的文件名）
  function base64ToFile(base64, fileName) {
    // 将base64按照 , 进行分割 将前缀  与后续内容分隔开
    let data = base64.split(',');
    // 利用正则表达式 从前缀中获取图片的类型信息（image/png、image/jpeg、image/webp等）
    let type = data[0].match(/:(.*?);/)[1];
    // 从图片的类型信息中 获取具体的文件格式后缀（png、jpeg、webp）
    let suffix = type.split('/')[1];
    // 使用atob()对base64数据进行解码  结果是一个文件数据流 以字符串的格式输出
    const bstr = window.atob(data[1]);
    // 获取解码结果字符串的长度
    let n = bstr.length
    // 根据解码结果字符串的长度创建一个等长的整形数字数组
    // 但在创建时 所有元素初始值都为 0
    const u8arr = new Uint8Array(n)
    // 将整形数组的每个元素填充为解码结果字符串对应位置字符的UTF-16 编码单元
    while (n--) {
      // charCodeAt()：获取给定索引处字符对应的 UTF-16 代码单元
      u8arr[n] = bstr.charCodeAt(n)
    }
    // 利用构造函数创建File文件对象
    // new File(bits, name, options)
    const file =  new File([u8arr], `${fileName}.${suffix}`, {
      type: type
    })
    // 将File文件对象返回给方法的调用者
    return file;
}

module.exports = {
    formatDate: formatDate,
    formatTime: formatTime,
    toDate: toDate,
    dateFormat: dateFormat,
    formatTimeTwo: formatTimeTwo,
    getBase64Image:getBase64Image,
    base64ToFile:base64ToFile
}