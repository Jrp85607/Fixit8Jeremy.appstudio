
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

let memberName = ""
//take in member name

btnSubmit2.onclick=function(){
  memberName = inptMember.value
  let checkName = members.includes(memberName)
  if (checkName == true) {
    lblTrue.hidden = false 
    lblTrue.textContent = "Your username is recognized, please continue."
  }
  else { 
    lblFalse.hidden = false
    lblFalse.textContent = "Your username does not exist, you will now be registered."
    members.push(memberName)
    inptMember.value = ""
    console.log(members[]) //Checks if member added successfully
  }
}
