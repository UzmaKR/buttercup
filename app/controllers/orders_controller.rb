class OrdersController < ApplicationController

  def index
    render :json => Order.all
  end

  def create
    order = Order.create! params[:order]
    render :json => order
  end

  def update
    order = Order.find(params[:id])
    order.update_attributes! params[:order]
    render :json => order
  end

  def show
    order = Order.find(params[:id])
    render :json => order
  end

  def destroy
    order = Order.find(params[:id]).destroy
    render :json => order
  end

end
