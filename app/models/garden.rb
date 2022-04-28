class Garden < ApplicationRecord
  
  has_many :seedlings
  has_many :plants, through: :seedlings
  belongs_to :user
end
