class BookingSerializer < ActiveModel::Serializer
  belongs_to :user
  attributes :id, :user, :item_id, :start_date, :end_date, :created_at
end
