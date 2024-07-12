const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254711645930";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_56_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDc2LFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg3LFxuICAgICAgICA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDIwLFxuICAgICAgICA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDksXG4gICAgICAgIDQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTExLFxuICAgICAgICA2NyxcbiAgICAgICAgMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDc5LFxuICAgICAgICA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEsXG4gICAgICAgIDUzLFxuICAgICAgICA0MixcbiAgICAgICAgMTk0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDgwLFxuICAgICAgICA5MyxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDYwLFxuICAgICAgICA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTksXG4gICAgICAgIDU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGbk13Tnh4aDR1YytuSHBNZTVURXlUSWpPU0tpZFhsdEFiWXFTQTJEZ0wwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5Wm5PSFJSd1NOdXZaNDN6QnNVS09nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI4NWZjODY0LTY4NTktNGJmMS05ZDk4LWNlMWViZDgxYmRiZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzcsXG4gICAgICAxMTEsXG4gICAgICAxNTcsXG4gICAgICAxMDUsXG4gICAgICAxOTYsXG4gICAgICA0MixcbiAgICAgIDExMyxcbiAgICAgIDEyLFxuICAgICAgNjQsXG4gICAgICAxMjAsXG4gICAgICAyOSxcbiAgICAgIDEzMSxcbiAgICAgIDU4LFxuICAgICAgMTQ1LFxuICAgICAgMTA4LFxuICAgICAgMzYsXG4gICAgICAxNTMsXG4gICAgICAyNDgsXG4gICAgICA1MSxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgMTQ4LFxuICAgICAgMTI4LFxuICAgICAgOTEsXG4gICAgICAxNTQsXG4gICAgICAyMDEsXG4gICAgICAyMDksXG4gICAgICAxOTgsXG4gICAgICAxNyxcbiAgICAgIDIxNixcbiAgICAgIDE2MSxcbiAgICAgIDE4MyxcbiAgICAgIDgsXG4gICAgICAzNCxcbiAgICAgIDgyLFxuICAgICAgMjA0LFxuICAgICAgMTg5LFxuICAgICAgMTgsXG4gICAgICAxMjYsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzNCQ0ZBQzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxMTY0NTkzMDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Rs/CdkprwnZKK8J2Sj/CdkoguLi5cIixcbiAgICBcImxpZFwiOiBcIjM4NjI5MzM4NTY2ODQ1OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnZWaVhFUWhMSEd0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUbEdXMFIrSXBiLzFjdTJLN1ZveXgyUFBHaEpzbTJPN3M2VW91b0dyckY0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZ0VzV5bEh0SG5ndm5MWFFEZDRPeTU1NElTYktFYkVJR0NmS25vR2xnYTdQa2RGMjVLR2dyeFFKSnlLeTlLbGZEZVl3U1lQc0hnWDBveDlVS1FjckNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5mRVY5VE1tUCtGOExXSHhMcjBsYXFNQ25HdjBic1FhWjRZQm01YzB4OTZPdjg2R2NxRUMrb1gyOWVMd0NsYWh4VjlpVVIvWlArT2YxYU84Smx0cUJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxMTY0NTkzMDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgxNzgwMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp1elwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnV6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTWVJdksxdEpEcGZManlaNnVKeTNOZ2UzRFBwOVJOWnVYUEYwcnhqRUtGTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzcxMzY1MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
