class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password, :favFood
end
