class User < ApplicationRecord
    
    has_secure_password
    validates :password, confirmation: true
    validates :password_confirmation, presence: true
    validates :age, presence: true
    validates :image, presence: true
    validates :address, presence: true
    validates :email, presence: true
    validates :age, numericality: {greater_than: 13}

    has_many :reviews, dependent: :destroy
    has_many :productions, through: :reviews

end

