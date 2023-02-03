class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :price, :rating, :quantity
end
