/**
 * Created by admin on 16/1/2.
 */
Posts = new Mongo.Collection('posts');

Posts.allow({
    insert:function(userId,doc){
       return !!userId;
    }
});