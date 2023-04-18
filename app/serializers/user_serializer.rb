class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :age, :address, :image, :productions
 
end
