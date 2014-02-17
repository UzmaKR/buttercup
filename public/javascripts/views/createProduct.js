
var app = app ||{};

app.newProductView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(app.ProductList, 'add', this.successMsg);
    this.listenTo(app.ProductList, 'invalid', this.errorMsg);
    this.render();
  },

  newProdTmpl: _.template($('#product-create-template').html()),

  events: {
    'click #next-prod': 'saveProdInfo',
    'click a#catalog-back': 'backToCatalog'
  },

  render: function() {
   var view = this.$el.html(this.newProdTmpl());
   $('#shipwire').empty();
   $('#shipwire').append(view);
  },

  saveProdInfo: function(e) {
    
    var formData = {};
    
    this.$('#addProd').children('input').each(function(i,el) {
      formData[el.id] = $(el).val();
    });

    app.ProductList.create(formData, {validate: true} );  

  },

  successMsg: function(e) {
    var msgHtml = $('<p> Product, '+e.get('name')+', successfully added.</p>');
    (this.$('#msgs')).empty();
    (this.$('#msgs')).append(msgHtml);
  },

  errorMsg: function(a,errorHash) {
    var msgHtml = $('<p> Product not added. Please fix the following:</p>');
    (this.$('#msgs')).empty();
    (this.$('#msgs')).append(msgHtml);
    for (var key in errorHash) {
      var err = $('<p>'+key+' : '+errorHash[key]+'</p>');
      (this.$('#msgs')).append(err);
    }
  },

  backToCatalog: function(e) {
    e.preventDefault();
    router.navigate('products', {trigger: true});
  }


});