
let button=getButton();
let shuffleButton=document.getElementById("shuffle")
button.addEventListener("click", handleClick)
shuffleButton?.addEventListener('click', shuffleStories)

//fonction pour recuperer les valeurs du formulaire
function getFormulaireofValues()
{
 const nom=document.getElementById("nom").value
 const adjective=document.getElementById("adjective").value
 const person =document.getElementById("person").value
 const verb=document.getElementById("verb").value
 const place=document.getElementById("place").value
 return{nom, adjective, person, verb, place} 
}

function handleClick(e)
{ 
    shuffleStories(e, true) 
}

let isFirstStory=writeStory()

function shuffleStories(e, isFirstStory=false)
{    e.preventDefault()
    let {nom, adjective,person,verb,place}=getFormulaireofValues()
    if([nom, adjective, person, verb, place].includes("")) return
    let randomNumber=generateRandomNumber()
    let stories=[(writeLoveStory()), writeHateStory(),writeQuestionStory()]
    let story= isFirstStory? stories[0]: stories[randomNumber]
    appendstoryToPage(story)
    
}
//fonction pour generer un nombre aleatoire de 0 a 3
function generateRandomNumber()
{
    return Math.floor(Math.random() * 3)
}
function appendstoryToPage(story){
    let paragraph=document.getElementById("story")
    let span=document.createElement("span")
    span.innerText=story
    paragraph.textContent=""
    paragraph.appendChild(span)
}
function writeLoveStory()
{
    const {nom, adjective,person,verb,place}=getFormulaireofValues()
   return `I like to look at ${nom}s, I think that they are ${adjective}, my Favorite 
   person is ${person}, we often ${verb} together when we are in ${place}`
}
function writeHateStory()
{   
    const {nom, adjective,person,verb,place}=getFormulaireofValues()
     
   return `I hate ${nom}s, I think that they are ${adjective}, I especially hate 
    ${person}, we never ${verb} I am in in ${place}`
}
function writeQuestionStory()
{    const {nom, adjective,person,verb,place}=getFormulaireofValues()
   return `when I am ${place}, I look at the people there and I find them ${adjective}, if I could meet sommeone, it would be  
    ${person}, I would like to ${verb} them with a ${nom}`
}
function getButton()
{
   return document.getElementById("lib-button")
}