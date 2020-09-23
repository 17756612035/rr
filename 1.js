
window.onload=function(){
    var Dianji=0;
    var buhao = document.getElementById("buhao");
    var hao = document.getElementById("hao");
    //好
    hao.onclick=function(){
        alert("往后余生，我陪你走！");
    }
    //不好
    buhao.onclick = function(){
        Dianji++;
        
        if(Dianji==1){
            alert("小姐姐，再考虑下呗！！");
        }else if(Dianji==2){
            alert("你是我见过最最可爱的女孩子啦！")
        }else if(Dianji==3){
            alert("爱你！");
        }else if(Dianji==4){
            alert("宠你！");
        }else if(Dianji==5){
            alert("不藏私房钱！");
        }else if(Dianji==6){
            alert("房子写你名字");
        }else if(Dianji==7){
            alert("工资全上交");
        }else if(Dianji==8){
            alert("考虑一下嘛~")
            Dianji=1;
        }
        hao.onclick=function(){
            alert("往后余生，我陪你走！");
        }
    }
    
}
