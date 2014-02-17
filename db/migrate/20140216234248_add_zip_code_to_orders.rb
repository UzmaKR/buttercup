class AddZipCodeToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :zipCode, :decimal
  end
end
