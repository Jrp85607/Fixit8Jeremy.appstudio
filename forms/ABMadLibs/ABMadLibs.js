

btnSubmitML.onclick=function(){
  let noun1 = inptDog.value
  let noun2 = inptCat.value
  let noun3 = inptHorse.value
  let verb1 = inptRunning.value
  let verb2 = inptJumping.value
  let verb3 = inptWalking.value
  let adj1 = inptLively.value
  let adj2 = inptLoudly.value
  let adj3 = inptCleverly.value
  let verbAction1 = inputBeautiful.value
  let verbAction2 = inputFun.value
  let verbAction4 = inputSad.value
  /*let nounPlural7 = noun7.v*/
  lblResult.value = `A ${noun1} in Nebraska was arrested this morning after ${verbAction1} in front of a ${adj1} ${noun2}. The perpetrator had a history of ${verbAction2}, but no one - not even her ${noun3} - ever imagined she'd ${verb3} with a ${noun4}. Even her ${noun5} was surprised. "I always thought she was ${adj2}, but I never thought she would do something like this." Either way, we imagine that after witnessing her ${verbAction4} with a ${adj3} ${noun6}, there are probably a whole lot of ${nounPlural7} that are going to need therapy.`
}


btnReset.onclick=function(){
  lblResult.value = 'Play again!'
  inptNoun1.value = ''
  inptNoun2.value = ''
  inptNoun3.value = ''
  inptNoun4.value = ''
  inptNoun5.value = ''
  inptNoun6.value = ''
  inptNoun7.value = ''
  inptVerb1.value = ''
  inptVerb2.value = ''
  inptVerb3.value = ''
  inptVerb4.value = ''
  inptAdj1.value = ''
  inptAdj2.value = ''
  inptAdj3.value = ''
}


Resubmit.onclick=function(){
 
}