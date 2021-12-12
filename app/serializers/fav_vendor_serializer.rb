class FavVendorSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :email, :foodType, :companyName
  
    # belongs_to :user

end
