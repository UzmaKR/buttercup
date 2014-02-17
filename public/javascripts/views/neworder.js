var app = app || {};

app.NewOrderView = Backbone.View.extend({

  initialize: function() {
  	this.listenTo(app.OrderList, 'add', this.successMsg);
    this.listenTo(app.OrderList, 'invalid', this.errorMsg);
    this.render();
  },

  events: {
    'click #back2orders': 'gotoOrderList',
    'click #next-order': 'addOrder'
  },

  tmpl: _.template( $('#order-create-template').html() ),

  render: function() {
    var view = this.$el.html( this.tmpl( {products: app.ProductList } ) );
    $('#shipwire').empty();
    $('#shipwire').append(view);
  },

  addOrder: function() {
  	var formData = {};
    
    this.$('#addOrder').children('input, select').each(function(i,el) {
      if ( el.toString().match(/select*productName/) !== null ) { formatData[el.id] = $('#productName option:selected').val() };
      if ( el.toString().match(/select*state/) !== null ) { formatData[el.id] = $('#state option:selected').val() };
      formData[el.id] = $(el).val();
    });
   
    app.OrderList.create(formData, {validate: true} ); 
  },

  successMsg: function(e) {
    var msgHtml = $('<p> Order for '+e.get('recipientName')+' successfully created.</p>');
    (this.$('#order-msgs')).empty();
    (this.$('#order-msgs')).append(msgHtml);
  },

  errorMsg: function(a,errorHash) {
    var msgHtml = $('<p> Order not created. Please fix the following:</p>');
    (this.$('#order-msgs')).empty();
    (this.$('#order-msgs')).append(msgHtml);
    for (var key in errorHash) {
      var err = $('<p>'+key+' : '+errorHash[key]+'</p>');
      (this.$('#order-msgs')).append(err);
    }
  },

  gotoOrderList: function(e) {
    e.preventDefault();
    router.navigate("orders", {trigger: true} );
  }



});