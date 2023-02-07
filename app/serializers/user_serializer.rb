class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :image
  has_many :reviews
  has_many :productions, through: :reviews
end
