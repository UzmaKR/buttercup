class AddDimensionToProducts < ActiveRecord::Migration
  def change
    add_column :products, :width, :decimal
    add_column :products, :length, :decimal
    add_column :products, :height, :decimal
    add_column :products, :weight, :decimal
  end
end
