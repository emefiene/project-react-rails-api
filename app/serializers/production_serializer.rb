class ProductionSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :price, :quantity, :reviews

end
