var num=20;
num="String";
var num2=10;
var flag=true;
var color="green";
console.log("hello from type script"+ num + "this is a number");
console.log(num2+num);
if(flag){
    console.log(flag);
}
for(var index=0;index<num;index++){
    var element=index;
    if(index%2==0){
        console.log(element);
    }


  
}
console.log("num type",typeof num=="number");
console.log("num type",typeof num=="string");
console.log("flag type",typeof num=="boolean");
console.log("string type",typeof num=="string");