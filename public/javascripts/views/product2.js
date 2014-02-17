var app = app || {};

app.ItemDetailsView = Backbone.View.extend({

  model: app.Product,

  initialize: function() {
    (this.model).on('change',this.render,this);
    this.render();
  },

  events: {
    'keypress .edit': 'editOnEnter',
    'click #deleteItem': 'deleteItem',
    'click a': 'backToMain'
  },

  tpl: _.template($('#each-item-template').html()),

  render: function() {
    var view = this.$el.html(this.tpl(this.model.toJSON()));
    $('#shipwire').empty();
    $('#shipwire').append(view);
    this.delegateEvents();
  },

  editOnEnter: function(e) {
    if (e.which === ENTER_KEY)  {
      var prop = $(e.currentTarget).data("id");
      var newValue = $(e.currentTarget).val().trim();
      this.model.set(prop, newValue);
      this.model.save();
      app.ProductList.add(this.model, {merge: true, add: false, change: false});
    }
  },

  deleteItem: function() {
    console.log('in deleteItem');
  	app.ProductList.remove(this.model);
  	this.backToMain();
  },

  backToMain: function() {
    router.navigate('products', {trigger: true});
  }

});