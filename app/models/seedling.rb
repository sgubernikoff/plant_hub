class Seedling < ApplicationRecord
  belongs_to :garden
  belongs_to :plant
end
