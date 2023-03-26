class ProductionSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :price, :rating, :quantity, :reviews, :users

    
  
    # formating specifier pintf format method
    # use object to look at attributes on instance
    # def price
    #    "$#{'%.2f' % object.price }"
    # end
end
