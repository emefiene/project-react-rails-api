class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments, :time
  has_one :production
  has_one :user
end
