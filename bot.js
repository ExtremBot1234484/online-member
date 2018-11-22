const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready'), () => {
    console.log('Logged in As ${client.user.tag}');


});

client.on('message'), message => {
    if (message.content.startWith("$$$linkkkkkkk")) {

    message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    message.chaneel.send("Check YoUr DM")

message.author.send('**عدد استخدامات الرابط 10
مدة الرابط يوم**')



    }
});





client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء