const fetch = require("node-fetch")
const send = require("./send");
const sendWin = require("./send_win_message")

const crowBotDb = {"1051777224400965652":"Internat", "905560086783602768":"Academie"}



const botsList = [

  "824119071556763668",
  "318312854816161792",
  "530082442967646230",
  "582537632991543307",
  "1056865910167699537",
  "294882584201003009"

]
const botreactIDS = 
{ 
  "824119071556763668":"Apollo",
  "318312854816161792":"DraftBot",
  "530082442967646230":"Giveaway Boat",
  "582537632991543307":"Santa Lunar",
  "1056865910167699537":"b.Protect",
}
 
const botButtonsIDS =
{
  "294882584201003009":"GiveawayBot"
}
 




const messagesJoin = 
[
  "🎉 GIVEAWAY! 🎉",//Apollo message
  "ends:", //Embed description
  "hosted by:",
  "**GIVEAWAY**", //Santa lunar
  "pour participer", //Crowbot b.protect
];

const messagesEnded = 
[
  " • ",
  "🎉 congratulations,",
  "GIVEAWAY ENDED", //Message
  "You won the", //Message
  "You have won a giveaway for", //embed
  "Félicitation à" //Crowbot msg
];
function containsAny(str, substrings) {
    for (var i = 0; i != substrings.length; i++) {
      
       var substring = substrings[i].toLowerCase();
       if (str.indexOf(substring) != - 1) {
         return true;
       }
    }
    return false; 
}
async function replyWithInvite(message) {
  let invite = await message.channel.createInvite(
  {
    maxAge: 10 * 60 * 1000, // maximum time for the invite, in milliseconds
    maxUses: 1 // maximum times it can be used
  },
  `Requested with command by ${message.author.tag}`
)
.catch(console.log);

  return invite
}

async function check(author, result, message, joined, won, webhook, webhookWin, SA, SE, OW, client){



  if(message.author.bot){

  }else{
    return
  }

  try{
    var messageContent = message.content.toLowerCase()
  }catch{
    var messageContent = "addzdzadazdzadza"
  }
  
  try{
    var messageContent2 = message.embeds[0].description.toLowerCase()
  }catch{
    var messageContent2 = "nonedazdazdazdaz"
  }
  

  

   
   
  function isCrowbot(botname){
    var detections = 0;
    botname = botname.toLowerCase()
   
    if(botname.includes("[+]")){
      detections+3
    }
    if(botname.includes("crow")){
      detections+2
    }
    if(botname.includes("protect")){
      detections+4
    }
    if(botname.includes("giveaway")){
      detections++
    }
    if(botname.includes("crowbot")){
      detections+5
    }
    if(crowBotDb.includes(author)){
      detections+5
    }
   
    if(detections>=3){
      return true
    }else{
      return false
    }
   
  }
   
   
   
  function isStart(){
    if(botButtonsIDS[author] === "giveaway bot"){
      if(message.embeds){
        return true
      }else{
        return false
      }
    }

    
    if(containsAny(messageContent2, messagesEnded)){
      return false
    }
    if(containsAny(messageContent2, messagesJoin)){
      return true
    }


    
    if(containsAny(messageContent, messagesEnded)){
      return false
    }
    if(containsAny(messageContent, messagesJoin)){
      return true
    }


    if(!containsAny(messageContent, messagesJoin) && !containsAny(messageContent, messagesEnded) && !containsAny(messageContent2, messagesEnded) && !containsAny(messageContent2, messagesJoin)){
      return false
    }
  }
   
  function getAuthor(){
    
    var resu = ["isReact", "isEnded"]

    if (botreactIDS[author]) 
    {
      resu[0] = "react"
   
    }else if(botButtonsIDS[author])
    {
      resu[0] = "button"
   
    }else{
      return ["no", "no"]
    }
    
    
    if(containsAny(messageContent2, messagesEnded)){
      resu[1] = "ended"
    }else if(containsAny(messageContent2, messagesJoin)){
      resu[1] = "running"
      
    }
    if(containsAny(messageContent, messagesEnded)){

      resu[1] = "ended"
      
    }
   
    if(containsAny(messageContent, messagesJoin)){
   
      resu[1] = "running"
   
    }
    
    if(!containsAny(messageContent, messagesJoin) && !containsAny(messageContent, messagesEnded) && !containsAny(messageContent2, messagesJoin) && !containsAny(messageContent2, messagesEnded)){
      return ["no", "no"]
    }
    
    return resu
  }
  function react(){
    const IStart = isStart()
    const IsGiveBot = getAuthor()
    
    if(IStart === true){
      if(IsGiveBot[0] === "no"){
        return false
      }
   
   
      if(IsGiveBot[1] === "ended"){
   
        //Giveaway is ended, send winner
   
      }else if(IsGiveBot[1] === "running")
      {
   
        //Giveaway is running, next step
   
      }else{
   
        return false
   
      }
   
   
   
      if(IsGiveBot[0] === "react"){
        message.react("🎉")
        //reacting to message
        return true
      }else if(IsGiveBot[0] === "button"){
        
        message.components[0].components[0].click(message)
        
        return true
      }else{
   
        return false
   
      }
    }
  }



    const IsEnded = isStart()
    const resultt = react()

    var prize = ""
    try{
      if(message.embeds[0]){
        prize = message.embeds[0].title
      }else if(message.content.toLowerCase().split("you won")[1]){
        prize = message.content.toLowerCase().split("you won")[1]
      }
      if(prize == null || prize == "null"){
        
        prize = message.embeds[0].author.name
      }
    }catch(e){
      
      prize = "none"
    }

    
    if(resultt === true && result === false){
      
      var invt = await replyWithInvite(message)
      send.send((botreactIDS[author] ? botreactIDS[author]:botButtonsIDS[author]), prize, 6, message.guild, SE, message.guild.members.cache.size, OW, SA, joined, won, webhook, invt, invt)

      
    }else{
      
    }

    if(containsAny(message.author.id, botsList) && result === true || containsAny(message.author.id, botsList) && result === true){
        var invt = await replyWithInvite(message)
        sendWin.send((botreactIDS[author] ? botreactIDS[author]:botButtonsIDS[author]), prize, 6, message.guild, SE, message.guild.members.cache.size, OW, SA, joined, won, webhook, invt, client.token)
      
      

      
    }else{
      
    }

    



}


module.exports = { check }
