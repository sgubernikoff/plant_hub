Rails.application.routes.draw do

  resources :users
  resources :gardens
  resources :plants, only: [:index, :show, :create, :destroy]
  resources :sessions, only: [:create, :destroy]
  post "/seedlings", to:"seedlings#create"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
