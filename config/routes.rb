Rails.application.routes.draw do
  post "/vendorsignup", to: "vendors#create"
  post "/customersignup", to: "customers#create"

  post "/vendorlogin", to: "sessions#create_vendor"
  post "/customerlogin", to: "sessions#create_customer"
  post "/addfav", to: "customers#add_fav"

  get "/showfav", to: "customers#show_fav"

  patch "/updatevendor/:id", to: "vendors#update"

  # use frontend if statement to decide what get /me request to send
  get "/vendorlist", to: "vendors#vendor_list"
  get "/me", to: "vendors#show"
  get "/customerme", to: "customers#show"

  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


# post "/login", to: "sessions#create"
# get "/me", to: "users#show"
# delete "/logout", to: "sessions#destroy"
