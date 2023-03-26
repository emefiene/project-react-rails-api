class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :productions, through: :reviews


    has_secure_password
    validates :password, confirmation: true
    validates :password_confirmation, presence: true
end
