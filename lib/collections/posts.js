/**
 * Created by admin on 16/1/2.
 */
Posts = new Mongo.Collection('posts');

Posts.allow({
	update:function  (userId ,post) {
		return ownsDocument(userId,post);
	},
	remove:function  (userId,post) {	
		return ownsDocument(userId,post);
	}
})

Meteor.methods({
	postInsert:function  (postAttributes) {
		check(Meteor.userId(),String);
		check(postAttributes,{
			title:String,
			url:String
		});

		//如果找到url相同的post，直接返回已经存在
		var postWithSameLink = Posts.findOne({url:postAttributes.url});
		if (postWithSameLink) {
			return {
				postExists:true,
				_id:postWithSameLink._id
			}
		}





		var user = Meteor.user();
		var post = _.extend(postAttributes,{
			userId:user._id,
			author: user.username,
			submitted:new Date()
		});

		var postId = Posts.insert(post);

		return {
			_id:postId
		};
	}
});