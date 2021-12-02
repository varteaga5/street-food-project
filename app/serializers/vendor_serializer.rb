class VendorSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password, :foodType, :companyName, :isVendor
end
