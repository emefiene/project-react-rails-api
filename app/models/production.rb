class Production < ApplicationRecord
    validates :price, presence: true
    validates :price, numericality: {greater_than: 0}
    has_many :reviews
    has_many :users, through: :reviews
    
end
