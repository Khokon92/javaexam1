 for(i=1;i<=100;i++){
    var res=i;
   document.write("<br>"+res)
 }
  for(i=2;i<=100;i=i+2){
   var res=i;
    document.write(res+"<br>")
 }
 var a=50+89;
 var total=a;
 document.write('sum of a='+total+"<br>");
  

var fullName=("khokon majhi");
var address=("bangla vision");
var phone=("01619116275");
var village=("bhatarakanda");
var division=("jhalakathi");
var res=fullName+address+village+division;
document.write("fullName is:"+fullName+"<br>"+"adress:"+address+"<br>"+"phone:"+phone+"<br>"+"village:"+village+"<br>"+"division:"+division+"<br>");

var mark=prompt("Enter any marks");
if(mark>100 && mark<0)
document.write('invaild mark,try to submit valid mark!');
else if(mark>=80 && mark<=100)
document.write('A+')
else if(mark>=75 && mark<=79)
document.write('A')
else if(mark>=70 && mark<=75)
document.write('A-')
else if(mark>=65 && mark<=69)
document.write('B+')
else if(mark>=60 && mark<=64)
document.write('B')
else if(mark>=55 && mark<=59)
document.write('B-')
else if(mark>=50 && mark<=54)
document.write('C+')
else if(mark>=45 && mark<=50)
document.write('c')
else if(mark>=40 && mark<=44)
document.write('D')
else if(mark>=35 && mark<=39)
document.write('D-')
else if(mark>=30 && mark<=32)
document.write('Fail')


var textElement=document.querySelector('img');
textElement.src="image/vision-pic.jpg";


