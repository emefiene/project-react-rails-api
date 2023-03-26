class ProductionSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :price, :rating, :quantity, :reviews, :users

end
