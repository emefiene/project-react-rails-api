class MemberSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password
  has_many :productions
end
