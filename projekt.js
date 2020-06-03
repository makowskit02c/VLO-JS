    var ctx = null;
    const cialo1 = {
        x:50,
        h: 25,
        w: 30
    }
    const cialo2 = {
        x:150,
        h: 25,
        w: 30
    }
    var masa1;
    var predkosc1;
    var masa2;
    var predkosc2;
    var zwrot2;
    var wynik1;
    var wynik2;
    var dx1;
    var dx2;
    var styk=false;

function wartosc(){
    masa1=parseInt(document.getElementById("masa1").value);
    predkosc1=parseInt(document.getElementById("predkosc1").value);
    masa2=parseInt(document.getElementById("masa2").value);
    predkosc2=parseInt(document.getElementById("predkosc2").value);
    zwrot2=document.getElementById("zwrot2").value;
    
    if (zwrot2=="Prawo"&&predkosc2>=predkosc1){
        wynik1=predkosc1;
        wynik2=predkosc2;
    }
    else if(zwrot2=="Prawo"){
        wynik1=(((2*masa2*predkosc2)+(predkosc1*(masa1-masa2)))/(masa1+masa2));
        wynik2=(((2*masa1*predkosc1)+(predkosc2*(masa2-masa1)))/(masa2+masa1));
    }
    else{
        wynik1=(((-2*masa2*predkosc2)+(predkosc1*(masa1-masa2)))/(masa1+masa2));
        wynik2=(((2*masa1*predkosc1)+(-1*predkosc2*(masa2-masa1)))/(masa2+masa1));
    }

    
    document.getElementById("wynik1").innerHTML="Prędkość pierwszego ciała po zderzeniu: "+wynik1.toFixed(2);
    document.getElementById("wynik2").innerHTML="Prędkość drugiego ciała po zderzeniu: "+wynik2.toFixed(2);
}
function tlo() {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");  
    //niebo
    ctx.fillStyle = "#5FAAD9";
    ctx.fillRect(0,0,920,120);
    //ziemia
    ctx.fillStyle = "rgb(0,128,0)";
    ctx.fillRect(0,120,920,50);
    //chmurka
    var img = document.getElementById("chmurka");
    ctx.drawImage(img,0,5,128,84);  
}
/*function kula1(){
    var kula1 = document.getElementById("kula1");
    ctx.drawImage(kula1,cialo1.x,98,25,30);
}
function kula2(){
    var kula2 = document.getElementById("kula2");
    ctx.drawImage(kula2,cialo2.x,98,25,30);
}*/
var ruchCialo1 = null;
var ruchCialo2 = null;
function draw() {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");   
    ruchCialo1 = new Image(25,30);
    ruchCialo2 = new Image(25,30);
    wartosc();    
    ruchCialo1.onload= function(){
        setInterval('myAnimation()',5);
    }
    ruchCialo1.src = "chrome.png";
    ruchCialo2.src = "firefox.png";
    
}
function myAnimation(){
    ctx.clearRect(0,0,480,320);
    tlo();

    ctx.drawImage(ruchCialo1,cialo1.x,98,cialo1.h,cialo1.w);
    ctx.drawImage(ruchCialo2,cialo2.x,98,cialo2.h,cialo2.w);
    dx1 = parseInt(cialo1.x+19);
    dx2 = parseInt(cialo2.x);
    //cialo1.x+=predkosc1/10;
    //cialo2.x+=predkosc2/10;
    if(dx1>=dx2){
        styk=true;
    }    
    if((zwrot2=="Prawo")&&(styk==false)){
        cialo1.x+=predkosc1/20;
        cialo2.x+=predkosc2/20;    
    }
    else if((zwrot2=="Lewo")&&(styk==false)){
        cialo1.x+=predkosc1/20;
        cialo2.x-=predkosc2/20;
    }
    else{
        cialo1.x+=wynik1/20;
        cialo2.x+=wynik2/20;
    }
}



