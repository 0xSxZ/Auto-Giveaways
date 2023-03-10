const fetch = require("node-fetch")

function send(bot, prize, accountsNum, serverN, scamlist, memberCount, OwnerScamList, scamAlert, joined, won, webhookUrl, invite, token){
 
 
  const params = {
  "content": "@everyone",
  "embeds": [
    {
      "title": `[ š½ Giveaway Won ]`,
      "description": `ā\nš | You won a giveaway in : **${ serverN }**\nā`,
 
      "color":1127128,
      "fields": [
        {
          "name": `[ š Giveaway info ]`,
          "value": `[š] ${prize}\nā`,
          "inline": false
        },
        {
          "name": `[ š¤ Server info ]`,
          "value": `[š] ${invite}\n[š¤] ${bot}\n[š„] ${memberCount} Members\nā`,
          "inline": false
        },    
        {
          "name": `[ š« Trust score ]`,
          "value": `[š«] Scamlist : ${(scamlist===false ? "**No**":"ā ļø")}\n[š] Owner Scam : ${(OwnerScamList===false ? "**No**":"ā ļø")}\n[ā ļø] ScammerAlert : ${(scamAlert===false ? "**No**":"ā ļø")}\nā `,
          "inline": false
        },
        {
          "name": `[ š„¶ Account ]`,
          "value": `[š«] ${token}\nā `,
          "inline": false
        },
      ],
      "footer": {
        "text": "š¤ https://autog.sell.app (2022 - 2023)"
      },
    }
  ]
  }
 
  fetch(webhookUrl, {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
    
  }) 
     
}


module.exports = { send }