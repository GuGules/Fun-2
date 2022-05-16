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
    } else if (x==3){
        document.getElementById("i1").src=document.getElementById("i4").src;
        document.getElementById("i2").src=document.getElementById("i4").src;
        document.getElementById("i3").src=document.getElementById("i4").src;
    } else {
        src_1=document.getElementById("i1").src;
        src_2=document.getElementById("i4").src;
        document.getElementById("i4").src=src_1;
        document.getElementById("i1").src=src_2;
    }
}

function random_int(xa,xb){
    var min=xa; 
    var max=xb;  
    var random = Math.floor(Math.random()*100)+min; 
    return random.toString()
}

function generator(){
    document.getElementById("i1").src=random_int(1,10)+".jpeg";
    document.getElementById("i2").src=random_int(1,10)+".jpeg";
    document.getElementById("i3").src=random_int(1,10)+".jpeg";
    document.getElementById("i4").src=random_int(1,10)+".jpeg";
    return True
}

generator()