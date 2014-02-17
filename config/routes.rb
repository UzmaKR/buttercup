Catalog::Application.routes.draw do

  # root to: 'products#index', via: :get
  match 'orders/orders' => 'orders#create'
  resources :products, only: [:index,:create,:update,:show,:destroy]
  resources :orders, only: [:index,:create,:show,:destroy]

   

  
end
