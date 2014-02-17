class AddPhoneToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :phoneNumber, :integer
  end
end
