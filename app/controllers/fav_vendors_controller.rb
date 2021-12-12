class FavVendorsController < ApplicationController
   
    skip_before_action :authorize, only: :create

    def create
        fav_vend = FavVendor.create(ven_params)
        render json: fav_vend
    end
    # this is whats needed to create seed
    # FavVendor.create!(firstName: 'treVendor', lastName: 'treVendor', email: 'treVendor@treVendor.com', foodType: 'tacos', companyName:'tretacos', user_id:69)

    def show
        fav_vend = @current_user.fav_vendors
        render json: fav_vend
    end

    private
    
    def ven_params
        params.permit(:firstName, :lastName, :email, :foodType, :companyName, :user_id)
    end
end
