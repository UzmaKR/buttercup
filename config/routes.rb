Catalog::Application.routes.draw do

  root to: 'products#index', via: :get
  resources :products, only: [:index,:create,:update,:show,:destroy]

  
end
