class Production < ApplicationRecord
    validates :description, presence: true
    validates :image, presence: true
    validates :price, presence: true
    validates :quantity, presence: true
    validates :price, numericality: {greater_than: 0}
    
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews, dependent: :destroy
    
end

