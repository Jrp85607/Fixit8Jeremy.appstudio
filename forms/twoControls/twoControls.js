
let name = " "

//Reformatted color of dropdown to #5DADE2 
//Reformatted color of lblDropdownResponse to #76D7C4
Dropdown1.onclick=function(s){
  name = inptName2.value
  if(typeof(s) == "Login") {
  return
  }
  lblDropdownResponse.hidden = false
  lblDropdownResponse.textContent = (`${name} selected ${Dropdown1.selection}`)
}


Pagination1.onclick=function(s){
  if(typeof(s) == "Login") {
  return
  }
  lblPagination.hidden = false
  lblPagination.textContent = (`Page ${Pagination1.selection} selected!`)
  console.log(`Page ${Pagination1.selection} selected!`)
}
