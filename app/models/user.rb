class User < ApplicationRecord
    has_many :reviews
    has_many :productions, through: :reviews

end
