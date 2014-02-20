
var app = app || {};

define(['backbone'],
    function(Backbone) {


    
  return Backbone.Model.extend({

  default: {
    recipientName: 'elvis presley',
    streetAddress: '123 anystreet',
    city: 'memphis',
    state: 'TN',
    zipCode: 12345,
    phoneNumber: 1231231234,
    productName: 'sofa chair',
    quantity: 12
  },

  url: function() { 
    if (this.isNew()) return 'orders';
    return this.get('id');
  },


  validate: function(attrs) {
    var results = {};
    if (!attrs.recipientName) { results.recipientName = 'Recipient name required'};
    if (!attrs.streetAddress) { results.streetAddress = 'Street Address required' };
    if (!attrs.city) { results.city = 'City required' };
    if (!attrs.state) { results.state = 'State required' };
    if (!attrs.zipCode || (parseInt(attrs.zipCode,10) === NaN)) { results.zipCode = '5 digits only' };
    if (!attrs.phoneNumber || (parseInt(attrs.phoneNumber,10) === NaN)) { results.phoneNumber = '10 digits only' };
    if (!attrs.productName) { results.productName = 'Product name required' };
    if (!attrs.quantity || (parseInt(attrs.quantity,10) === NaN)) { results.quantity = 'Integers only' };

    if (Object.keys(results).length !== 0) { 
        return results; 
    }  
    
  }
  
  });

});