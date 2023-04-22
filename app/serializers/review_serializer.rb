class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :comments
  
  belongs_to :user
  belongs_to :production
end
