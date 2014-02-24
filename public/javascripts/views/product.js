define(['jquery', 'underscore','backbone', 'models/product','shared','text!templates/productRow.html'],
  function($, _, Backbone, ProductModel, shared, ProductRowTmpl) {

      return Backbone.View.extend({

          tagName: 'tr',

          model: ProductModel,

          initialize: function() {
            this.render();
          },

          events: {
            'click ': 'showDetails'
          },

          tpl: _.template( ProductRowTmpl ),

          render: function() {
            this.$el.html(this.tpl(this.model.toJSON()));
            return this;
          },

          showDetails: function() {
            var id = this.model.get('id');
            shared.router.navigate('products/'+id, {trigger: true});
          }

      });

});

