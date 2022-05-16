function survolee(x){
    var a=0;
    var b=0;
    var src_1="";
    var src_2="";
    if (x==1){
        src_1=document.getElementById("i2").src;
        src_2=document.getElementById("i3").src;
        document.getElementById("i3").src=src_1;
        document.getElementById("i2").src=src_2;
    } else {
        src_1=document.getElementById("i1").src;
        src_2=document.getElementById("i4").src;
        document.getElementById("i4").src=src_1;
        document.getElementById("i1").src=src_2;
    }
}