class MemberSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password
 
end
