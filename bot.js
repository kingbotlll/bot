const Discord = require("discord.js");
const client = new Discord.Client();



client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



client.on('ready', () => {
    console.log('I am ready!');
});


var prefix= "*";


client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'not active'));
});





///////////////////codes

client.on('message', message => {
    if(!message.channel.guild) return;
       if(message.content.startsWith('Code')) {
        let modlog = client.channels.find('name', 'active');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`اضغط على الصح عشان تتفعل`).then(msg => {


        msg.react('✅')
       .then(() => msg.react('✅'))



       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

       let active = msg.createReactionCollector(activeFilter, { time: 15000 });


                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Code"));
                                   message.member.removeRole(message.guild.roles.find("name", "not active"));
                                   msg.delete();
                                   message.channel.send(`**تم تفعيلك استمتع.**`).then(m => m.delete(1000));

                                   })
                                   })
                                   }
                                   });





//////////shop


client.on('message', message => {
    if(!message.channel.guild) return;
       if(message.content.startsWith('Shop')) {
        let modlog = client.channels.find('name', 'active');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`اضغط على الصح عشان تتفعل`).then(msg => {


        msg.react('✅')
       .then(() => msg.react('✅'))



       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

       let active = msg.createReactionCollector(activeFilter, { time: 15000 });


                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Shop"));
                                   message.member.removeRole(message.guild.roles.find("name", "not active"));
                                   msg.delete();
                                   message.channel.send(`**تم تفعيلك استمتع.**`).then(m => m.delete(1000));

                                   })
                                   })
                                   }
                                   });









////////////////////games





client.on('message', message => {
    if(!message.channel.guild) return;
       if(message.content.startsWith('Games')) {
        let modlog = client.channels.find('name', 'active');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`اضغط على الصح عشان تتفعل`).then(msg => {


        msg.react('✅')
       .then(() => msg.react('✅'))



       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

       let active = msg.createReactionCollector(activeFilter, { time: 15000 });


                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Games"));
                                   message.member.removeRole(message.guild.roles.find("name", "not active"));
                                   msg.delete();
                                   message.channel.send(`**تم تفعيلك استمتع.**`).then(m => m.delete(1000));

                                   })
                                   })
                                   }
                                   });






///////////////////////////////////swlaf











client.on('message', message => {
    if(!message.channel.guild) return;
       if(message.content.startsWith('Swalf')) {
        let modlog = client.channels.find('name', 'active');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`اضغط على الصح عشان تتفعل`).then(msg => {


        msg.react('✅')
       .then(() => msg.react('✅'))



       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

       let active = msg.createReactionCollector(activeFilter, { time: 15000 });


                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Swalf"));
                                   message.member.removeRole(message.guild.roles.find("name", "not active"));
                                   msg.delete();
                                   message.channel.send(`**تم تفعيلك استمتع.**`).then(m => m.delete(1000));

                                   })
                                   })
                                   }
                                   });









//clear
client.on("message", message => {
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith("clear")) {
                if (!message.member.hasPermission("MANGE_MESSAGES"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription("clear <number>")
                                .setColor("RANDOM")
                                message.channel.sendEmbed(embed3);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let embed4 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(embed4);
                            }
                          }
});




client.on('message', message => {
    if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`You Don't Have [*MANAGE_MESSAGES*] Permission `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);

const messagecount = parseInt(args.join(' '));

message.channel.fetchMessages({

  limit: messagecount

}).then(messages => message.channel.bulkDelete(messages));
};

});







//////////////LINK
 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم أرسال الرابط برسالة خاصة ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")

    .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
      message.author.sendEmbed(Embed11)
    }
});








client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('bcall')){
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});













///////////////login bot



client.login(process.env.BOT_TOKEN);
