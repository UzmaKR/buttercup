var app = app || {};
ENTER_KEY = 13;

$(function() {
	
	router = new app.Controller();
	Backbone.history.start({pushState: true});
});