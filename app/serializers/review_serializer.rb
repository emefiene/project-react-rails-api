class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :comments, :production_id, :user_id
  belongs_to :user
  belongs_to :production
end
