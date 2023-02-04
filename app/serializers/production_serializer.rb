class ProductionSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :price, :rating, :quantity
    has_one :member
    has_many :reviews
    has_many :users, through: :reviews

    # formating specifier pintf format method
    # use object to look at attributes on instance
    def price
       "$#{'%.2f' % object.price }"
    end
end
