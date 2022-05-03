class Garden < ApplicationRecord
  
  has_many :seedlings, dependent: :destroy
  has_many :plants, through: :seedlings
  belongs_to :user
  
end
