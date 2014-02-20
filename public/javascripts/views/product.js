var app = app || {};

define(['jquery', 'underscore','backbone', 'models/product'],
  function($, _, Backbone, ProductModel) {

      return Backbone.View.extend({

          tagName: 'tr',

          model: ProductModel,

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
          }

      });

});

