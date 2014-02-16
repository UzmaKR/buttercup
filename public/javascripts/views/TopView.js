var app = app || {}

app.TopView = Backbone.View.extend({

  el: '#main',

  topTpl: _.template($('#catalog-template').html()),

  initialize: function() {
    this.prodTable = this.$('#shipwire');
    this.render();
    $('.add-product').click(function() {
      router.navigate('new', {trigger: true}); 
    });
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
    	  var view = new app.ProductView( {model: prod} );
        var row = view.render().$el;
    	  (row).appendTo(self.catalogItem);
      });
    }
  },

  showDetails: function(itemDetailView) {
    (this.prodTable).empty();
    (this.prodTable).append(itemDetailView);
  }

  



});