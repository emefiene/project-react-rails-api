class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments, :production_id, :user_id
  belongs_to :user
end
