var uik = document.getElementById("list")
function addtodo(){
    var inputt = document.getElementById("inp")
    if(inputt.value== ""){
        alert("Enter your Memo")
    }
    var yp= document.createTextNode(inputt.value)
    var yu = document.createElement("li")
    var pol = document.createElement("input")
    yu.setAttribute('id','kh')
  pol.setAttribute("type","checkbox")
  pol.setAttribute("id","hh")
 yu.appendChild(pol)
 yu.appendChild(yp)
uik.appendChild(yu)
 inputt.value=" "


 var io = document.createElement("button")
 io.setAttribute("class","btnop" )
 io.setAttribute("onClick","dele(this)")
 var ty = document.createElement("i")
ty.setAttribute("class","fa fa-trash-o")
var df = document.createElement("button")
df.setAttribute("class","btn2")
df.setAttribute("onClick","edi(this)")
var ju = document.createElement("i")
ju.setAttribute("class","fa fa-pencil")
io.appendChild(ty)
df.appendChild(ju)
yu.appendChild(io)
yu.appendChild(df)
uik.appendChild(yu)

console.log(yu.childNodes[1].textContent)

}




function del(){
  document.getElementById("nm")
    
   uik.innerHTML =" "
    
    
}
function edi(e){
  var i = document.createElement("input")
  i.setAttribute("class","gh")
// console.log(i)
 var y = e.parentNode.childNodes[1].textContent
 var t = e.parentNode.childNodes[1].replaceWith(i)
console.log(t)
}

function dele(f){

    f.parentNode.remove(" ")
}