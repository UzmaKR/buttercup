var app = app || {};
ENTER_KEY = 13;

usStates = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
 			"HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
 			"MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
 			"NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
 			"SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];

define(['backbone', 'router'],
	function(Backbone, Controller) {

      $(function() {
	     router = new Controller();
	     Backbone.history.start( {pushState: true} );
      });


});

