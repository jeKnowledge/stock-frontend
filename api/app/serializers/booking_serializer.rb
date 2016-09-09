class BookingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :item_id, :start_date, :end_date, :created_at, :updated_at
end
