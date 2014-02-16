class ProductsController < ApplicationController

  def index
    render :json => Product.all
  end

  def create
    product = Product.create! params[:product]
    render :json => product
  end

  def update
    product = Product.find(params[:id])
    product.update_attributes! params[:product]
    render :json => product
  end

  def show
    product = Product.find(params[:id])
    render :json => product
  end

  def destroy
    product = Product.find(params[:id]).destroy
    render :json => product
  end

end
