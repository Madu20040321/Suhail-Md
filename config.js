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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94729825827";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_04_24_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY3LFxuICAgICAgICA3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxODksXG4gICAgICAgIDE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzksXG4gICAgICAgIDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDYyLFxuICAgICAgICA2LFxuICAgICAgICA1NixcbiAgICAgICAgODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NixcbiAgICAgICAgODYsXG4gICAgICAgIDI2LFxuICAgICAgICAzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNixcbiAgICAgICAgMjAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmVaNUtQQ29RRDJQOVhmUG5LQU9FdHU0SURuU3I1RlFnYXhwd2ZRb1NkOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidjl0Z0FzdHNUY09oTkpUTXhNYTRGd1wiLFxuICBcInBob25lSWRcIjogXCI4ODU0NjhjMi00ZDJmLTQxYzItODA3Mi0wMjcwNjIyNjRhY2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAzMixcbiAgICAgIDgwLFxuICAgICAgMzQsXG4gICAgICAyMjUsXG4gICAgICAxMTksXG4gICAgICAyMzUsXG4gICAgICAyMzUsXG4gICAgICA0MCxcbiAgICAgIDI0OCxcbiAgICAgIDExLFxuICAgICAgMjE1LFxuICAgICAgMTM1LFxuICAgICAgNDMsXG4gICAgICAxNTAsXG4gICAgICAxMTQsXG4gICAgICAyNDIsXG4gICAgICAxNzEsXG4gICAgICA5NSxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgMjI3LFxuICAgICAgMzksXG4gICAgICAxODIsXG4gICAgICA5OCxcbiAgICAgIDEzMSxcbiAgICAgIDE1OSxcbiAgICAgIDY5LFxuICAgICAgMTcsXG4gICAgICAxOTQsXG4gICAgICAxMCxcbiAgICAgIDIxOSxcbiAgICAgIDMyLFxuICAgICAgMTYxLFxuICAgICAgNTQsXG4gICAgICAyMDMsXG4gICAgICAyMDUsXG4gICAgICAxMDgsXG4gICAgICAyMjcsXG4gICAgICA5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQNFFSOFJBQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Mjk4MjU4Mjc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjgwMDAxOTM3MTYyNDEwOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSU9HcGQwRUVOeUxyN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlS1kxMW1nWXR3NVFNa3lHTHduSUJ6ekd4d2tpRUJhRjJnQ1FtaGdFUUFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIngxNWR6OEpqMEk2bCtiVFVaUy9DRWJYOEx0cU9jcGZNME81MlI5QjUrMmpLejlXWWZkdVo4MEVHOUx5Q1lmSSs4ZWpsc1ppc1ZRUWlrdUZabDRTSEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZHUkN2eUk3bXdmb05kS08vemJ4azNRSXVnQ2k0WDNEMnhObzh4OWdicUt5WVByRDd4ZmxJZnc2aWc2N2tpVnJQL1puVDJvTEhHbkZmTyszejN1OURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzI5ODI1ODI3OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODMzOTAzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhpVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGlULmpzb24iOiAie1wia2V5RGF0YVwiOlwiUkM3OStmdzExUmhROVRwOXAzV2Z2RW5wMzdaQnM3NHUyOUlFdWU3MG9WTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjY5MzgzOTM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgzMzkwNDE4OTZcIn0iCn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
