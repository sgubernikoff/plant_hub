class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :gardens

def gardens
  ActiveModel::SerializableResource.new(object.gardens,  each_serializer: GardenSerializer)
  end
end
