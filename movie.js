var movie=function(rtm,channel) {
	console.log('영화 추천합니다');
	rtm.sendMessage('취향에 맞는 영화를 추천해드릴게요',channel);

}

module.exports=movie;
