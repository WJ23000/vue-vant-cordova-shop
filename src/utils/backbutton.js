// 监听手机返回键退出app功能
export function backbutton() {
    var exitAppTicker = 0;
    document.addEventListener("deviceready",function(){
        document.addEventListener("backbutton", function(){
            if(this.isHomePage()){
                if(exitAppTicker == 0){
                    exitAppTicker++;
                    alert("再点一次退出");
                    setTimeout(function(){
                        exitAppTicker = 0;
                    },2000);
                }else if(exitAppTicker == 1){
                    navigator.app.exitApp(); //退出app
                }  
            }else{
                history.back();
            }
        }, false);
    },false);
}


// 判断当前是不是首页
function isHomePage(){
    let path = this.$route.path.toString();
    let pName = this.$route.name.toString();
    if(path == "/" || pName == "Index"){
        return true;
    }
}