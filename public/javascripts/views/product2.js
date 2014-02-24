define(['jquery', 'underscore', 'backbone', 'models/product', 'shared','text!templates/editProduct.html'],
  function($, _, Backbone, ProductModel, shared, EditProductTmpl) {

    return Backbone.View.extend({

      model: ProductModel,

      initialize: function() {
        (this.model).on('change',this.render,this);
        this.render();
      },

      events: {
        'keypress .edit': 'editOnEnter',
        'click #deleteItem': 'deleteItem',
        'click a': 'backToMain'
      },

      tpl: _.template( EditProductTmpl ),

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
          shared.productList.add(this.model, {merge: true, add: false, change: false});
        }
      },

      deleteItem: function() {
        console.log('in deleteItem');
      	shared.productList.remove(this.model);
      	this.backToMain();
      },

      backToMain: function() {
        shared.router.navigate('products', {trigger: true});
      }

    });

});