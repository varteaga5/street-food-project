Rails.application.routes.draw do
  get "/favmenus/:companyName", to: 'menus#show_by_name'
  resources :menus
  resources :fav_vendors
  post "/vendorsignup", to: "vendors#create"
  post "/customersignup", to: "customers#create"

  post "/vendorlogin", to: "sessions#create"
  post "/customerlogin", to: "sessions#create"

  patch "/updatevendor/:id", to: "vendors#update"

  get "/vendorlist", to: "vendors#vendor_list"
  get "/me", to: "users#show"
  # get "/customerme", to: "customers#show"

  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end