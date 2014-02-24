
define(['jquery', 'underscore', 'backbone','text!templates/createorder.html', 'shared'],
  function($, _, Backbone, CreateOrderTmpl, shared) {

    return Backbone.View.extend({

      initialize: function() {
      	this.listenTo(shared.orderList, 'add', this.successMsg);
        this.listenTo(shared.orderList, 'invalid', this.errorMsg);
        this.render();
      },

      events: {
        'click #back2orders': 'gotoOrderList',
        'click #next-order': 'addOrder'
      },

      tmpl: _.template( CreateOrderTmpl ),

      render: function() {
        var view = this.$el.html( this.tmpl( {products: shared.productList } ) );
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
       
        shared.orderList.create(formData, {validate: true} ); 
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
        shared.router.navigate("orders", {trigger: true} );
      }



    });

});