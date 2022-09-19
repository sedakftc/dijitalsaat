function GetTime(){
    var now = new Date(); 
    var hour= now.getHours();
    var minute=now.getMinutes();
    var second= now.getSeconds();

    var day=now.getDate();
    var month=now.getMonth()+1; 
    var year= now.getFullYear();

   (hour<10) ? document.getElementById("hour").innerHTML="0"+hour : 
               document.getElementById("hour").innerHTML=hour;

   (minute<10) ? document.getElementById("minute").innerHTML="0"+minute :
                 document.getElementById("minute").innerHTML=minute;
   (second<10) ? document.getElementById("second").innerHTML="0"+second :
                 document.getElementById("second").innerHTML=second;

document.getElementById("tarih").innerHTML= day+" / "+month+" / "+year;
}

setInterval(function(){GetTime();},1000);

   
    var name = prompt("Dijital saate hoşgeldiniz lütfen isminizi giriniz","")
   
    document.getElementById("myName").innerHTML = name
   
   
    document.getElementById("myClock").onload = showTime()