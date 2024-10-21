// hàm lấy cookie
export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// hết hàm lấy cookie

// Hàm tạo cookie
export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expries=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//  hết hàm tạo cookie

// hàm xóa cookie
export function deleteCookies(cname){
    document.cookie = `${cname}=; expries=Thu, 01 Jan 1970 00:00::00 UTC`
}
// hết hàm xóa cookie

// hàm xóa hết cookie
export function deleteAllCookies(){
    const cookies = document.cookie.split(";")

    for(let i=0; i<cookies.length;i++){
        const cookie= cookies[i];
        const eqPos= cookie.indexOf("=");
        const name = eqPos >-1 ? cookie.substr(0,eqPos):cookie;
        document.cookie = name + "=;expries=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
// hết hàm xóa hết cookie
