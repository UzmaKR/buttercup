define(['jquery', 'underscore', 'backbone', 'shared', 'views/product', 'text!templates/catalog.html'], 
  function($, _, Backbone, shared, ProductView, CatalogTmpl) {

    return Backbone.View.extend({

      el: '#main',

      topTpl: _.template( CatalogTmpl ),

      initialize: function() {
        this.prodTable = this.$('#shipwire');
        this.render();
        $('.add-product').click(function() {
          shared.router.navigate('new', {trigger: true}); 
        });
      },

      events: {
        'click .back-to-home': 'goHome'
      },
      
      render: function() {
        var self = this;
        (this.prodTable).empty();
      	this.prodTable.html(this.topTpl());
        this.msgs = this.$('#product-body #msgs');
        self.catalogItem = this.$('#catalog-table #product-info');
        if (this.collection) {
          if (this.collection.models.length === 0) {
            $('<p>No items in catalog.</p>').appendTo(this.$('#product-body #msgs'));
          }
          this.collection.forEach(function(prod) {
        	  var view = new ProductView( {model: prod} );
            var row = view.render().$el;
        	  (row).appendTo(self.catalogItem);
          });
        }
      },

      showDetails: function(itemDetailView) {
        (this.prodTable).empty();
        (this.prodTable).append(itemDetailView);
      },

      goHome: function() {
        shared.router.navigate('', {trigger: true} );
      }


    });

});