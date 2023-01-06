const fetch = require("node-fetch")

function send(bot, prize, accountsNum, serverN, scamlist, memberCount, OwnerScamList, scamAlert, joined, won, webhookUrl, duration, invite){
 
 
  const params = {
  "embeds": [
    {
      "title": `[ 🚨 Giveaway joined ]`,
      "description": `‎\n🍀 | You joined a giveaway in **${ serverN }**\n‎`,
 
      "color":1127128,
      "fields": [
        {
          "name": `[ 🎉 Giveaway info ]`,
          "value": `[🎁] ${prize}\n‎`,
          "inline": false
        },
        {
          "name": `[ 👤 Server info ]`,
          "value": `[🔗] ${invite}\n[🤖] ${bot}\n[👥] ${memberCount} Members\n‎`,
          "inline": false
        },    
        {
          "name": `[ 🚫 Trust score ]`,
          "value": `[🚫] Scamlist : ${(scamlist===false ? "**No**":"⚠️")}\n[👑] Owner Scam : ${(OwnerScamList===false ? "**No**":"⚠️")}\n[⚠️] ScammerAlert : ${(scamAlert===false ? "**No**":"⚠️")}\n‎ `,
          "inline": false
        },   

      ],
      "footer": {
        "text": "🤖 https://autog.sell.app (2022 - 2023)"
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