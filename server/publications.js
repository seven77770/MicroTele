/**
 * Created by admin on 16/1/2.
 */
Meteor.publish('posts',function(){
    return Posts.find();
});