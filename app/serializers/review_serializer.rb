class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments, :time, :production_id, :user_id
  has_one :production
  has_one :user
end
