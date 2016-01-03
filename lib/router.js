/**
 * Created by admin on 16/1/3.
 */
Router.configure({
   layoutTemplate:'layout',
    loadingTemplate:'loading',
    waitOn:function(){
        return Meteor.subscribe('posts');
    }
});

Router.route('/',{name:'postsList'});