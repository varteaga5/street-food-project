class MenuSerializer < ActiveModel::Serializer
  attributes :id, :belongs_to, :companyName, :foodName, :foodDesc, :price

  belongs_to :vendor
end
