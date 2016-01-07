Template.errors.helpers({
	errors:function  () {
		// body...
		return Errors.find();
	}
});

Template.error.onRendered(function  () {
	// body...
	var error = this.data;
	Meteor.setTimeout(function  () {
		Errors.remove(error._id);
	},3000);
});