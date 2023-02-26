Rails.application.routes.draw do
  
  resources :members, only: [:index, :show, :create]
  resources :reviews, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create]
  resources :productions, only: [:index, :show, :create, :update, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  post '/login', to: 'sessions#create'

  get '/authorized_user', to: 'users#show'

  delete '/logout', to: 'sessions#destroy'
end
                                                                                                                                                                                                                                                                                                              