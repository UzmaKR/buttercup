class AddCityStateToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :city, :string
    add_index :orders, :city
    add_column :orders, :state, :string
    add_index :orders, :state
  end
end
