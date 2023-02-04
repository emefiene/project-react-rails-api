class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password
  has_many :reviews
  has_many :productions, through: :reviews
end
