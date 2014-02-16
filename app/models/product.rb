class Product < ActiveRecord::Base
  attr_accessible :name, :description, :weight, :height, :length, :width, :value
  validates :name, :description, :weight, :height, :length, :width, :value, presence: true
  validates :weight, :length, :width, :value, numericality: true
end
