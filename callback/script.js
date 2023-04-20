let div = document.createElement("div")
div.id="test";
div.innerHTML="";
document.body.append(div);

function foo(){
for(let i=9;i>=1;i--){

setTimeout(()=>{
let name = document.getElementById("test")
name.innerHTML=`${i}`;
console.log(name.innerHTML)},((10-i)*1000));
}

setTimeout(()=>{
    let name = document.getElementById("test")
    name.innerHTML=`HAPPY INDEPENDENCE DAY`;
    name.style.color="red";
    name.style.fontSize="100px";
    console.log(name.innerHTML)},10000);

}

foo()
