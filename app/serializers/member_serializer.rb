class MemberSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password
  has_one :owner
end
