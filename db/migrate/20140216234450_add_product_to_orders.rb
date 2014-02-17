class AddProductToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :productName, :string
  end
end
