class VendorsController < ApplicationController

    skip_before_action :authorize, only: [:create, :show]

    def create
        vendor = Vendor.create!(vendor_params)
        session[:user_id] = vendor.id
        render json: vendor, status: :created
    end

    def vendor_list
        vendor = Vendor.all
        render json: vendor
    end

    def show
        vendor = Vendor.find_by(id: session[:user_id])
        render json: vendor
    end

    private

    def vendor_params
        params.permit(:name, :username, :password, :password_confirmation, :foodType, :companyName, :isVendor)
    end
end

