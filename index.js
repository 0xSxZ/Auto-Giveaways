
const {
   Client,
   Intents,
   Discord
} = require('discord.js-selfbot-v13');
const Eris = require("eris");
const send = require("./modules/send")
const sendWin = require("./modules/send_win_message")
const check = require("./modules/react")
const DiscordI = require("discordtokeninfos")
const http = require("http");
const login = require("discord-password-login");
const prompt = require("prompt-sync")();
var colors = require('colors');
const config = require(require("path").join(__dirname, 'config.json'));
const fs = require("fs")

//const { app, BrowserWindow, ipcMain } = require('electron')
//var Jetty = require("jetty");
process.on('uncaughtException', function (err) {

});

const {
   Webhook,
   MessageBuilder
} = require('discord-webhook-node');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
});
process.stdout.write('\033c')

var clients = []
const client = new Client({
   checkUpdate: false,
});
const KeyAuth = require('./KeyAuth');
const KeyAuthApp = new KeyAuth("NL", // Application Name
   "4lhXrF1CCQ", // OwnerID
   "2eaddbacbbd06925ef17bae04b3da3396574c4ad5812d7cdd8d30e7cf2904087", // Application Secret
   "1.0" // Application Version
);
var botUserIDs = [];
var lic;


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
  "294882584201003009":"Giveaway Bot"
}
 



console.log(`
                           ---------------------------------------------------------
                           |-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-| 
                           |-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-| 
                           ||                                                     ||                                                     
                           ||                   Auto Giveaways                    ||    
                           ||             https://discord.gg/jWCYx7UfsQ           ||      
                           ||                                                     ||    
                           |-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-| 
                           |-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-| 
                           ---------------------------------------------------------



   `)
async function ws() {
   const host = 'localhost';
   const port = 8000;

   const requestListener = function (req, res) {
       res.writeHead(200);
       res.end("My first server!");
   };

}
async function e(){
   console.log("[!]".red + " Converting (make sure your IP is registered to the accounts.)")
   const toks = config.token
   var lst = []
   var count = 0
   for (var token of toks) {
      login(token.split(":")[0], token.split(":")[1]).then(token => {
         lst.push(token)
      });

      await delay(10000)
      count++
      console.log('[?]'.rainbow + " Converted : " + count + " tokens...")
      console.log('[@]'.rainbow + " Wating 10 seconds...")

   }

   console.log(lst)
   count = 0;
}
var Joined = 0;
var fetched = 0;
var wons = 0;
const tokens = config.token
async function printProgress(progress){
    await process.stdout.clearLine();
    await process.stdout.cursorTo(0);
    await process.stdout.write(progress);
}
function percentage(partialValue, totalValue) {
   return (100 * partialValue) / totalValue;
} 

async function f() {

      //await KeyAuthApp.Initialize();
      //await KeyAuthApp.license(name);

      var hook = new Webhook(config.webhook)
      var hookWin = new Webhook(config.webhookWin)


      //process.stdout.write('\033c')
      console.log("[@]".cyan + " Loaded : " + tokens.length.toString().blue + " tokens...")
      for (var token of tokens) {
         const client = new Client({
            checkUpdate: false,
         });
         var cbd = "";
         

         
            cbd = token
            clients.push(client);
            client.once('ready', async() => {
            try{


            botUserIDs.push(client.user.id)
               
            /*
               
               client.channels.cache.find( channel => {


                  
                  if (channel.type == "DM") {} else {
                     
                     if(channel.name == undefined || channel.name == null){

                     }else {

                     if (channel.name.includes("giveaway") || channel.name.includes("nitro") || channel.name.includes("no-req") || channel.name.includes("gw") || channel.name.includes("fast") || channel.name.includes("paypal") || channel.name.includes("€") || channel.name.includes("¹") || channel.name.includes("²")) {
                        channel.messages.fetch({
                           limit: 5
                        }).then(messages => {
                           messages.forEach(async message => {
                              if (message.author.id === "294882584201003009") {
                                 if (message.embeds[0] === undefined) {} else if (message.embeds[0].description.includes("Hosted by:") && message.embeds[0].description.includes("Entries:") && !message.embeds[0].description.includes("Ended:")) {
                                    let invite = "soon"
                                    message.components[0].components[0].click(message)
                                    var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined (Hosted by Giveaway Bot)').setURL("https://discord.gg/jWCYx7UfsQ").setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                                    hook.send(embed2);
                                    Joined++
                                 }
                              } else if (message.author.id === "824119071556763668") {
                                 if (message.content.includes("GIVEAWAY!")) {
                                    let invite = "soon"
                                    message.react("🎉")
                                    var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined (Hosted by Apollo)').setURL("https://discord.gg/jWCYx7UfsQ").setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                                    hook.send(embed2);
                                    Joined++
                                 }
                              } else if (message.author.id === "530082442967646230") {
                                 if (message.embeds[0] === undefined) {

                                 } else if (message.embeds[0].description.includes("React with") && message.embeds[0].description.includes("Winners:") && message.embeds[0].description.includes("Duration:")) {
                                    let invite = "soon"
                                    var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined (Hosted by Giveaway Boat)').setURL("https://discord.gg/jWCYx7UfsQ").setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                                    hook.send(embed2);
                                    message.react("🎉")
                                    Joined++
                                 }
                              } else if (message.author.id === "318312854816161792") {
                                 if (message.content.includes("GIVEAWAY")) {
                                    message.react("🎉")
                                    let invite = "soon"
                                    var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined (Hosted by DraftBot) ').setURL("https://discord.gg/jWCYx7UfsQ").setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                                    hook.send(embed2);
                                    Joined++
                                 }
                              } else if (message.author.id === "582537632991543307") {
                                 if (message.content.includes("GIVEAWAY")) {
                                    message.react("🎉")
                                    Joined++
                                    let invite = "soon"
                                    var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined (Hosted by Santa Lunar)').setURL("https://discord.gg/jWCYx7UfsQ").setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                                    hook.send(embed2);
                                 }
                              }

                           })
                        }).catch()
                     } else {}
                     }
                  }
                  

               }).catch()
               */
               }catch{

               }
            });
            client.on("messageCreate",  async message => {
               if (message.content.includes(client.user.id)) {
                  result = true
               } else {
                  result = false
               }


               //result = botUserIDs.every(w => message.content.includes(w))
               try {

                  function getScammers(path,id){
                      const body = fs.readFileSync(require("path").join(__dirname,'db/'+ path),
                              {encoding:'utf8', flag:'r'});
                      const bodySA = JSON.parse(body)
                      var isInScamlist;
                      if(bodySA[id]){
                          isInScamlist = true
                      }else{
                          isInScamlist = false;
                      }
                      return isInScamlist

                  }
                  const ownerr = await message.guild.fetchOwner();

                  

                  var resultJoin = check.check(message.author.id,  result, message, Joined/tokens.length, wons, config.webhook, config.webhookWin, getScammers("s-alert.txt", ownerr.id), getScammers("servers.txt", message.guild.id), getScammers("owners.txt", ownerr.id), client)

                  
                 /*
                  if (message.author.id === "294882584201003009") {
                     if (message.content.includes("Congratulations") && result) {
                        let invite = "soon"
                        const owner = "soon"
                        var embed = new MessageBuilder().setTitle(':star: You won a giveaway !').setColor('#0x00FFFF').setURL("https://discord.gg/jWCYx7UfsQ").setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou won a **giveaway**, Send a private message to the admin.\n\n----------------------------------------------------------").addField("Prize", message.content.split("You won the")[1] + "\n\n----------------------------------------------------------").addField("Token", client.token);
                        hookWin.send(embed);
                        hookWin.send("@everyone")
                        hookWin.send("@everyone")
                        wons++
                     }
                     if (message.embeds[0] === undefined) {
                        return
                     }
                     if (message.embeds[0].description.includes("Hosted by:") && message.embeds[0].description.includes("Entries:")) {
                        let invite = "soon"
                        message.components[0].components[0].click(message)
                        var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined').setURL("https://discord.gg/jWCYx7UfsQ").setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                        hook.send(embed2);
                        Joined++
                     }
                 
                  } else if (message.author.id === "824119071556763668") {
                     if (message.content.includes("GIVEAWAY!")) {
                        let invite = "soon"
                        message.react("🎉")
                        Joined++
                        var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined').setURL("https://discord.gg/jWCYx7UfsQ").setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                        hook.send(embed2);
                     } else if (result && message.content.includes("Congratulations,")) {
                        console.log("wonZDAZADZDZADAZDZ")
                        let invite = "soon"
                        const owner = "soon"
                        var embed = new MessageBuilder().setTitle(':star: You won a giveaway !').setColor('#0x00FFFF').setURL("https://discord.gg/jWCYx7UfsQ").setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou won a **giveaway**, Send a private message to the admin.\n\n----------------------------------------------------------").addField("Prize", message.content.split("You won ")[1] + "\n\n----------------------------------------------------------").addField("Token", client.token);
                        hookWin.send(embed);
                        hookWin.send("@everyone")
                        hookWin.send("@everyone")
                        wons++
                     }
             
                  } else if (message.author.id === "530082442967646230") {
                     if (message.content.includes("Congratulations to ") && result) {
                        let invite = "soon"
                        const owner = "soon"
                        var embed = new MessageBuilder().setTitle(':star: You won a giveaway !').setColor('#0x00FFFF').setURL("https://discord.gg/jWCYx7UfsQ").setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou won a **giveaway**, Send a private message to the admin.\n\n----------------------------------------------------------").addField("Prize", message.content.split("You won the")[1] + "\n\n----------------------------------------------------------").addField("Token", client.token);
                        hookWin.send(embed);
                        hookWin.send("@everyone")
                        hookWin.send("@everyone")
                        wons++
                     }
                     if (message.embeds[0].description.includes("React with") && message.embeds[0].description.includes("Winners:") && message.embeds[0].description.includes("Duration:")) {
                        let invite = "soon"
                        var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined').setURL("https://discord.gg/jWCYx7UfsQ").setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                        hook.send(embed2);
                        message.react("🎉")
                        Joined++
                     }
               
                  } else if (message.author.id === "318312854816161792") {
                     if (message.content.includes("GIVEAWAY")) {
                        message.react("🎉")
                        let invite = "soon"
                        var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined').setURL("https://discord.gg/jWCYx7UfsQ").setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                        hook.send(embed2);
                        Joined++
                     }
                 
                  } else if (message.author.id === "582537632991543307") {
                     if (message.content.includes("GIVEAWAY")) {
                        message.react("🎉")
                        let invite = "soon"
                        var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined').setURL("https://discord.gg/jWCYx7UfsQ").setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                        hook.send(embed2);
                     }
                     if (message.content.includes("<a:GiveawayEmoji:954421693550571590> •") && result) {
                        let invite = "soon"
                        const owner = "soon"
                        var embed = new MessageBuilder().setTitle(':star: You won a giveaway !').setColor('#0x00FFFF').setURL("https://discord.gg/jWCYx7UfsQ").setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou won a **giveaway**, Send a private message to the admin.\n\n----------------------------------------------------------").addField("Token", client.token);
                        hookWin.send(embed);
                        hookWin.send("@everyone")
                        hookWin.send("@everyone")
                        wons++
                     }
                  }

                  */
               } catch (e) {
                  console.log(e)
               }
            })
            client.on('messageUpdate', async (oldMessage, newMessage) => {
               try {
                  result = botUserIDs.every(w => newMessage.embeds[0].description.includes(w))
                  if (newMessage.author.id === "318312854816161792") {
                     if (result && newMessage.content.includes("GIVEAWAY TERMINÉ")) {
                        let invite = await newMessage.channel.createInvite()
                        const owner = await newMessage.guild.fetchOwner();
                        var embed = new MessageBuilder().setTitle(':star: You won a giveaway !').setColor('#0x00FFFF').setURL("https://discord.gg/jWCYx7UfsQ").setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou won a **giveaway**, Send a private message to the admin.\n\n----------------------------------------------------------").addField("Token", client.token);
                        hookWin.send(embed);
                        hookWin.send("@everyone")
                        hookWin.send("@everyone")
                        wons++
                     }
                  }
               } catch {}
            });
            client.login(token);

      }
      
      while (true){
                  
         process.stdout.write('\033c')
         console.log("[@]".blue + " Auto-G, unique and efficient");
         await delay(1000)
      }
      
      

}
async function promptt()
{


   //await KeyAuthApp.Initialize();
   //await KeyAuthApp.license(config.license);
   

  /*
      
      const createWindow =() =>{
      const win = new BrowserWindow({
         width: 1000,
         height: 600,
         frame: false,
         webPreferences: { 
           contextIsolation: false,
           nodeIntegration: true
          }

      })


      
      win.loadFile('html/index.html')

   }

   app.whenReady().then(() => {
      createWindow()

        app.on('activate', () => {
          if (BrowserWindow.getAllWindows().length === 0) createWindow()
        })


   })

   app.on('window-all-closed', () => {
     if (process.platform !== 'darwin') app.quit()
   })



   ipcMain.on('synchronous-message',(event, arg) => {
      if(arg.includes("GetToks")){
         event.returnValue = tokens.length
      }
   })
   async function c(){
      
      ipcMain.on('synchronous-message', (event, arg) => {
         event.returnValue = [ (Joined / tokens.length).toFixed(0), wons, percentage(wons, Joined/tokens.length).toFixed(2) ]
      })
   }
   
   setInterval(function(){ 
       c()
   }, 5000);

   */
   f()

   
}

promptt()