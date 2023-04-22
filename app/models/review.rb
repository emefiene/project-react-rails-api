class Review < ApplicationRecord
  validates :comments, presence: true

  belongs_to :production
  belongs_to :user

  
end
