var app = app || {};
app.ErrorView = Backbone.View.extend({

  model: app.Error,

  errTpl: _.template('<p><%= message %></p>'),

  render: function() {
  	this.$el.html(this.errTpl(this.model.toJSON()));
  	return this;
  }

})