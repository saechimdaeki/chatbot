var pingping= require('./test.bot');

describe('테스트를 시작합니다.' ,function(){
	it('기본메시지 -> 안녕하세요. 영화,밥,놀이중에 말씀해주세요.', function(done){
		if(pingpong('기본메시지') === '안녕하세요. 영화,밥,놀이중에 말씀해주세요.');{
			done();
		}
	});

	it('영화->취향에 맞춘 영화를 추천해드릴게요.', function(done){
		if(pingpong('영화')  === '취향에 맞춘 영화를 추천해드릴게요');{
			done();
		}
	});

	it('밥->주변 맛집을 추천해드릴게요 ' ,function(done){
		if(pingpong('밥')==='주변맛집을추천해드릴게요');{
			done();
		}
	});

it('놀이 ->고만해 .' ,function(done){
	if(pingpong('놀이')==='고만해'){
		done();
	}
});
});

	
