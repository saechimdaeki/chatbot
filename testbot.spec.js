const pingpong = function(sendtext){
        require('dotenv').config();
        const token = process.env.SLACK_TEST_TOKEN;
        const tchannel=process.env.TESTING_CHANNEL;
        const tuser=process.env.TESTING_USER;
        const {RTMClient}=require('@slack/rtm-api');
        const rtm=new RTMClient(token);
        rtm.start().catch(console.error);
        rtm.on('ready' ,async() => {
                const res= await rtm.sendMessage(sendtext,tchannel);
        });
        rtm.on('message',function(message){
                var text=message.text;
                if(message.user == tuser){
                        rtm.disconnect();
                        return text;
                }
        });
};
module.exports = pingpong;
