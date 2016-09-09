class Booking < ApplicationRecord
  validates :user_id, presence: true
  validates :item_id, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true

  belongs_to :item
  belongs_to :user
end
