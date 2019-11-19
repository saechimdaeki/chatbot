require('dotenv').config();

var status= 0;

const token= process.env.SLACK_TESTER_TOKEN;
const tchannel = process.env.TESTING_CHANNEL;
const tuser = process.env.TESTING_USER;

const {RTMClient , LogLevel} =require('@slack/rtm-api');

const rtm = new RTMClient(token, {
//	logLevel: LogLevel.DEBUG,
});

rtm.start().catch(console.error);

rtm.on('ready', async() => {
	const res= await rtm.sendMessage("테스트를 시작합니다.",tchannel);
	console.log("보낸메시지:테스트를시작합니다.");
	status++;
});
rtm.on('message' , function(message){
	var text=message.text;
	console.log(text, message.user);
	if(message.user ==tuser){
		console.log(text,message.user);
		switch(status){
			case 1:
				if(text != "안녕하세요.영화,밥,놀이중에말씀해주세요"){
					console.log("테스트 실패: 기본메시지");
					process.exit(1);
				}
				console.log("받은메시지:",text);
				rtm.sendMessage("영화",tchannel);
				status++;
				break;
			case 2:
				console.log("보낸메시지:영화");
				if(text!="취향에맞는영화를추천해드릴게요"){
					console.log("테스트실패:영화");
					process.exit(1);
				}
				console.log("받은메시지:" , text);
				rtm.sendMessage("밥",tchannel);
				status++;
				break;
			case 3:
				console.log("보낸메시지:밥");
				if(text!="주변맛집을추천해드릴게요"){
					console.log("테스트실패:밥");
					process.exit(1);
				}
				console.log("받은메시지:",text);
				rtm.sendMessage("놀이",tchannel);
				status++;
				break;
			case 4:
				console.log("보낸메시지:놀이");
				if(text!="고만해"){
					console.log("테스트실패:놀이");
					process.exit(1);
				}
				console.log("받은메시지:",text);
				console.log("테스트가정상종료되었습니다");
				process.exit(0);
				break;
			default:
				console.log("테스트가이상상태입니다");
		}
	}
});
