class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo_url
  has_many :bookings
end
