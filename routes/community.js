var communityService = require('../domain/CommunityService').CommunityService;
var SocialPerson = require('../domain/SocialPerson').constructor;

exports.index = function(req, res){
	var communities = communityService.findAllCommunities();
	res.render('community/index',{
		communities : communities
	});
};

exports.open = function(req, res){
	res.render('community/open');
};

var adminPerson = new SocialPerson("aa@kosta.com", "최순실", "1111");

exports.create = function(req, res){
	communityService.registCommunity(req.param('name'), 
													req.param('desc'), adminPerson);
	res.redirect(302, '/community');
};


exports.join = function(req, res){
	var community = communityService.findCommunity(req.param('id'));
	res.render('community/join', {
		community : community
	});
};

exports.member = function(req, res){
	var person = new SocialPerson(req.param('email'),
			req.param('name'), req.param('password'));
	
	communityService.joinAsMember(req.param('communityId'), person);
	
	res.redirect(302, '/community');
};















