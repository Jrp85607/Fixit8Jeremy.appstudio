
let name = " "

Dropdown1.onclick=function(s){
  name = inptName2.value
  if(typeof(s) == "Login") {
  return
  }
  lblDropdownResponse.hidden = false
  lblDropdownResponse.textContent = (`${name} selected ${Dropdown1.selection}`)
}
