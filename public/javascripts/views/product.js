var app = app || {};

app.ProductView = Backbone.View.extend({

  tagName: 'tr',

  model: app.Product,

  initialize: function() {
    this.render();
  },

  events: {
    'click ': 'showDetails'
  },

  tpl: _.template('<td><%= name %></td>'+
  	  			  '<td><%= description %></td>'+
  	  			  "<td class='el-icon-info-sign'>Details</td>"),

  render: function() {
    this.$el.html(this.tpl(this.model.toJSON()));
    return this;
  },

  showDetails: function() {
    var id = this.model.get('id');
    router.navigate('products/'+id, {trigger: true});
  	// var view = new app.ItemDetailsView({model: this.model});
  	// app.AppView.showDetails(view.render().$el);
  }

});


