class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments, :time
  has_one :owner
  has_one :user
end
