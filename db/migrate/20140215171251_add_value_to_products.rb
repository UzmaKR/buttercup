class AddValueToProducts < ActiveRecord::Migration
  def change
    add_column :products, :value, :decimal
  end
end
