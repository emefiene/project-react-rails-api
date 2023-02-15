class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments, :production_id, :user_id
  
end
