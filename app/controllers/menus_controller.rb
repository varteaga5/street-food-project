class MenusController < ApplicationController

        # def search
        #     search = @current_user.houses.query(params[:query])
        #     render json: search
        # end
        
        def index
            render_menu
        end

        def create
            new_item = @current_user.menus.create(menu_params)
            render json: new_item, status: :created
        end

        def show
            vendor = find_vendor
            render json: vendor.menus
        end
    
    
        def update
            house = find_house
            house.update(house_params)
            render_houses
        end
        
        def destroy
            house = find_house
            house.destroy
            render_houses
        end
        
        private
        
        def menu_params
            params.permit(:companyName, :foodName, :foodDesc, :price )
        end
        
        def find_vendor
            @vendor = Vendor.find_by(id: params[:id])
        end
        
        def render_menu
            # will have to find the correlated vendor

            # add vendor id col to Menu model
            # create btn component and pass vendor as props
            # use vendor id to find vendor by id and then call .menus
            render json: @current_user.menus
        end
end

# t.bigint "user_id", null: false
# t.string "companyName"
# t.string "foodName"
# t.string "foodDesc"
# t.string "price"
