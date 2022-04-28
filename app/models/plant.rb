class Plant < ApplicationRecord

    has_many :seedlings
    has_many :gardens, through: :seedlings
end
