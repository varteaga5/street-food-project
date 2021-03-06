class VendorsController < ApplicationController

    skip_before_action :authorize, only: [:create, :show]

    def create
        vendor = User.vendors.create!(vendor_params)
        session[:user_id] = vendor.id
        render json: vendor, status: :created
    end

    def vendor_list
        vendor = Vendor.all
        render json: vendor
    end

    # def show 
    #     vendor = User.find_by(id: session[:user_id])
    #     render json: vendor
    # end

    def update
        vendor = Vendor.find_by(id: session[:user_id])
        vendor.update(vendor_params)
        render json: vendor
    end



    private

    def vendor_params
        params.permit(:firstName, :lastName, :email, :password, :password_confirmation, :foodType, :companyName, :type)
    end

end

