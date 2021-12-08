class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :favFood, :type, :email

end
