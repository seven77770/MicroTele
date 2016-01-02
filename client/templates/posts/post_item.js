/**
 * Created by admin on 16/1/2.
 */
Template.postItem.helpers({
    domain:function(){
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});