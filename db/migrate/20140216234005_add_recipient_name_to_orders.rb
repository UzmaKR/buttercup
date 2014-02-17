class AddRecipientNameToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :recipientName, :string
    add_index :orders, :recipientName
  end
end
