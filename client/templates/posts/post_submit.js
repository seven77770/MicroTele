/**
 * Created by admin on 16/1/4.
 */
Template.postSubmit.events({
    'submit form':function(e){
        e.preventDefault();

        var post = {
            url:$(e.target).find('[name=url]').val(),
            title:$(e.target).find('[name=title]').val()
        };

        Meteor.call('postInsert',post,function (error,result) {
        	if (error) {
        		return alert(error.reason);
        	}

        	Router.go('postPage',post);
        });
        
    }
});