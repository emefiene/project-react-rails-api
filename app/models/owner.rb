class Owner < ApplicationRecord
    has_many :members
    has_many :reviews
    has_many :users, through: :reviews
end
