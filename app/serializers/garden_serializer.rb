class GardenSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
  has_many :plants
end
