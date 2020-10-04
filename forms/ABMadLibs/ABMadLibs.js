/*
var nounArray = ['dog', 'cat', 'horse']
var verbArray = ['running', 'jumping', 'alking']
var adjectiveArray = ['lively', 'loudly', 'cleverly']
var adverbArray = ['beautiful','fun', 'sad']
var strMadLib = `A noun in Nebraska was arrested this morning after verb in front of a adjective noun. The perpetrator had a history of verb, but no one - not even her noun - ever imagined shed verb with a noun. Even her noun was surprised. "I always thought she was adjective, but I never thought she'd do something like this. Either way, we imagine that after witnessing her verb with a adjective noun, there are probably a whole lot of noun'''s that are going to need therapy.`
var userName = ""
var nounValue = ""
var verbValue = ""
var adjectiveValue = ""
var adverbValue = ""
var strDisplay = ""
var strDisplay0 = ""
var strDisplay1 = ""
var strDisplay2 = ""

inptPlay.onclick=function()
{
  if (inptPlay.value == "Play")  
    {
    userName= inptName.value
    nounValue = nounArray[inptNoun.value] 
    verbValue = verbArray[inptVerb.value] 
    adjectiveValue = adjectiveArray[inptAdjective.value] 
    adverbValue = adverbArray[inptAdverb.value] 
    strDisplay0 = strMadLib.replace(/noun/g, nounValue)
    strDisplay1 = strDisplay0.replace(/verb/g, verbValue)
    strDisplay2 = strDisplay1.replace(/adjective/g, adjectiveValue)
    strDisplay = strDisplay2.replace(/adverb/g, adverbValue)
    lblName.textContent = `${userName}, here is your MadLib`
    lblName.hidden = false
    lblDisplay.textContent = strDisplay
    lblDisplay.hidden = false
    inptPlay.value = "Clear"
    console.log(strDisplay)
    }  else  
    {
    inptName.value = ""
    inptNoun.value = ""
    inptVerb.value = ""
    inptAdjective.value = ""
    inptAdverb.value = ""
    lblName.textContent = ""
    lblName.hidden = true
    lblDisplay.textContent = ""
    lblDisplay.hidden = true
    inptPlay.value = "Play" */
  /*  console.log(userName , nounValue, verbValue, adjectiveValue, adverbValue)*/
 /*   }
  
}
 */