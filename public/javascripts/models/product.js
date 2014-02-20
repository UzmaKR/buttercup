var app = app || {};

define(['backbone'],
  function(Backbone) {

  return Backbone.Model.extend({

  default: {
    name: 'tennis racket',
    description: 'light fiber frame',
    width: 12,
    length: 36,
    height: 1,
    weight: 1,
    value: 25
  },

  url: function() { 
    if (this.isNew()) return 'products';
    return this.get('id');
  },

  initialize: function() {
    this.listenTo(app.ProductList,'remove',this.clearIt);
  },

  validate: function(attrs) {
    var results = {};
    if (!attrs.name) { results.name = 'Product name required'};
    if (!attrs.description) { results.description = 'Description required' };
    if (!attrs.width || (parseInt(attrs.width,10) === NaN)) { results.width = 'Width number required' };
    if (!attrs.length || (parseInt(attrs.length,10) === NaN)) { results.length = 'Length number required' };
    if (!attrs.height || (parseInt(attrs.height,10) === NaN)) { results.height = 'Height number required' };
    if (!attrs.weight || (parseInt(attrs.weight,10) === NaN)) { results.weight = 'Weight number required' };
    if (!attrs.value || (parseInt(attrs.value,10) === NaN)) { results.value = 'US Dollar number required' };

    if (Object.keys(results).length !== 0) { 
        return results; 
    }  
  },

  clearIt: function(removedModel) {
    removedModel.destroy();
  }

  });

});

