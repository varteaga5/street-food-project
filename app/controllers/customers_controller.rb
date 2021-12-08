class CustomersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        customer = Customer.create!(customer_params)
        session[:user_id] = customer.id
        render json: customer, status: :created
    end

    def show
        customer = Customer.find_by(id: session[:user_id])
        render json: customer
    end

    def add_fav
        @fav = Vendor.find_by(email: params[:email])
        render json: @fav
    end

    def show_fav
        favo = @fav
        render json: favo
    end


    private

    def customer_params
        params.permit(:firstName, :lastName, :email, :password, :password_confirmation, :favFood)
    end
end

