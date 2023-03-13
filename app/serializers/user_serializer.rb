class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :age, :address, :image
 
end
