
var app = app || {};

app.OrderView = Backbone.View.extend({

  tagName: 'tr',

  model: app.Order,

  initialize: function() {
    this.render();
  },

  events: {
    'click td.el-icon-info-sign': 'showOrderDetails'
  },

  tpl: _.template('<td><%= recipientName %></td>'+
                  '<td><%= productName %></td>'+
                  "<td class='el-icon-info-sign'>Details</td>"),

  render: function() {
    this.$el.html( this.tpl(this.model.toJSON()) );
    return this;
  },

  showOrderDetails: function() {
    router.navigate('orders/'+this.model.get('id'),{trigger: true});
  }


});