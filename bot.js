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
/*

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




*/






client.on('message', function(message) {
    if(message.content.startsWith('Code')) {
        let guild = message.mentions.members.first();
                                  let modlog = client.channels.find('name', 'active');
                          let ZmA = new Discord.RichEmbed()
  .setColor('3fcf24')
                  .setDescription('**__:white_check_mark: لقد تم تفعيلك في السيرفر__**')
                                      .addField('تم تفعيل العضو :', "<@" + message.author.id + ">")
                    .setImage(`${message.author.avatarURL}`)
  message.delete("..");
      
         message.member.addRole(message.guild.roles.find('name', 'Code'));
                    message.channel.send({embed:ZmA});
}
});







//////////shop

/*
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

*/




client.on('message', function(message) {
    if(message.content.startsWith('Shop')) {
        let guild = message.mentions.members.first();
                                  let modlog = client.channels.find('name', 'active');
                          let ZmA = new Discord.RichEmbed()
  .setColor('3fcf24')
                  .setDescription('**__:white_check_mark: لقد تم تفعيلك في السيرفر__**')
                                      .addField('تم تفعيل العضو :', "<@" + message.author.id + ">")
                    .setImage(`${message.author.avatarURL}`)
  message.delete("..");
      
         message.member.addRole(message.guild.roles.find('name', 'Shop'));
                    message.channel.send({embed:ZmA});
}
});






////////////////////games


/*


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




*/







client.on('message', function(message) {
    if(message.content.startsWith('Games')) {
        let guild = message.mentions.members.first();
                                  let modlog = client.channels.find('name', 'active');
                          let ZmA = new Discord.RichEmbed()
  .setColor('3fcf24')
                  .setDescription('**__:white_check_mark: لقد تم تفعيلك في السيرفر__**')
                                      .addField('تم تفعيل العضو :', "<@" + message.author.id + ">")
                    .setImage(`${message.author.avatarURL}`)
  message.delete("..");
      
         message.member.addRole(message.guild.roles.find('name', 'Games'));
                    message.channel.send({embed:ZmA});
}
});


///////////////////////////////////swlaf









/*

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


*/


client.on('message', function(message) {
    if(message.content.startsWith('Swalf')) {
        let guild = message.mentions.members.first();
                                  let modlog = client.channels.find('name', 'active');
                          let ZmA = new Discord.RichEmbed()
  .setColor('3fcf24')
                  .setDescription('**__:white_check_mark: لقد تم تفعيلك في السيرفر__**')
                                      .addField('تم تفعيل العضو :', "<@" + message.author.id + ">")
                    .setImage(`${message.author.avatarURL}`)
  message.delete("..");
      
         message.member.addRole(message.guild.roles.find('name', 'Swalf'));
                    message.channel.send({embed:ZmA});
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
    if (message.content.startsWith('clear')) {
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





//restart



const child_process = require("child_process");
const adminprefix = "*";
const ownersbot = ['428902593255702548']; //ايديات مسموح لها

client.on('message', message => {
if(message.content === "restart") {
      if (!ownersbot.includes(message.author.id)) return;
          message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }

  });




//report




const hook = new Discord.WebhookClient('455353441695432724', 'M_fnBcIBrjN5RA4cJ9gnFF_vJq0-zlCIUbQreHydBZ_T-SkYQP5vlGXFfMJgU8eYyCMj');
client.on('message', function(message) {
    if(message.content.startsWith("report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**report @mention reason! **");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("لم اجد الشخص.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__هل انت متاكد هذه رساله سوف تنرسل الى اونر سيرفر__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    hook.send(Rembed)
    message.reply("**# - تم! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - اغلاق!**");
})
})
}
});










///////////////login bot



client.login(process.env.BOT_TOKEN);
