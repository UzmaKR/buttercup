class Order < ActiveRecord::Base
  attr_accessible :recipientName, :streetAddress, :zipCode, :phoneNumber, :city, :state, :productName, :quantity
  validates :recipientName, :streetAddress, :zipCode, :phoneNumber, :city, :state, :productName, :quantity, presence: true
  validates :zipCode, :phoneNumber, :quantity, numericality: true
end
