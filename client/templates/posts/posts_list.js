/**
 * Created by admin on 16/1/2.
 */


Template.postsList.helpers({
   posts:function(){
       return Posts.find();
   }
});