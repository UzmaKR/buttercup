# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140216234518) do

  create_table "orders", :force => true do |t|
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.string   "recipientName"
    t.string   "streetAddress"
    t.string   "city"
    t.string   "state"
    t.decimal  "zipCode"
    t.integer  "phoneNumber"
    t.string   "productName"
    t.integer  "quantity"
  end

  add_index "orders", ["city"], :name => "index_orders_on_city"
  add_index "orders", ["recipientName"], :name => "index_orders_on_recipientName"
  add_index "orders", ["state"], :name => "index_orders_on_state"
  add_index "orders", ["streetAddress"], :name => "index_orders_on_streetAddress"

  create_table "products", :force => true do |t|
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.string   "name"
    t.text     "description"
    t.decimal  "width"
    t.decimal  "length"
    t.decimal  "height"
    t.decimal  "weight"
    t.decimal  "value"
  end

end
