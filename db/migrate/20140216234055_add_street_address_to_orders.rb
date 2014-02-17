class AddStreetAddressToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :streetAddress, :string
    add_index :orders, :streetAddress
  end
end
