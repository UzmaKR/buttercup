var app = app || {};

app.Controller = Backbone.Router.extend({

  routes: {
    '': 'index',
  	'products/:id' : 'edit',
  	'new': 'newProduct'

  },

  index: function() {
    
    (app.ProductList).fetch({
      success: function() {
        new app.TopView({ collection: app.ProductList });
      },
      error: function() {
        console.log('Server error: Could not load products.');
      }
    });
  },

  newProduct: function() {

    new app.newProductView( {model: new app.Product()} );

  },

  edit: function(id) {

    var model = new app.Product({id: id});

    model.fetch({
      success: function() {
        new app.ItemDetailsView( {model: model} );
      },

      error: function() {
        console.log('Server error: could not retreive product.');
      }
    });

  }


});