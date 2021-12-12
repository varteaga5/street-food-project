class MenusController < ApplicationController

        # def search
        #     search = @current_user.houses.query(params[:query])
        #     render json: search
        # end
        
        def index
            vendor = find_vendor
            render json: vendor
        end

        def create
            new_item = @current_user.menus.create(menu_params)
            render json: new_item, status: :created
        end

        def show
            
            render json: find_vendor_menu
        end
    
    
        def update
            house = find_house
            house.update(house_params)
            render_houses
        end
        
        def destroy
            item = Menu.find_by(id: params[:id])
            item.destroy
            render json: @current_user.menus
        end
        
        private
        
        def menu_params
            params.permit(:companyName, :foodName, :foodDesc, :price )
        end
        
        def find_vendor_menu
            @vendor = Menu.where(user_id: params[:id])
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
