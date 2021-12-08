class SessionsController < ApplicationController

    skip_before_action :authorize, only: [:create_vendor, :create_customer]

    def create_vendor
        vendor = Vendor.find_by(email: params[:email])

        if vendor&.authenticate(params[:password])
            session[:user_id] = vendor.id
            render json: vendor
        else
            render json: { errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    def create_customer
        customer = Customer.find_by(email: params[:email])

        if customer&.authenticate(params[:password])
            session[:user_id] = customer.id
            render json: customer
        else
            render json: { errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
