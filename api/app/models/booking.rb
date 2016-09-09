class Booking < ApplicationRecord
  # Associations
  belongs_to :item
  belongs_to :user

  # Validations
  validates :user_id, presence: true
  validates :item_id, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validate :item_not_currently_booked

  def item_not_currently_booked
    if self.item.current_booking 
      errors.add(:item_already_booked, 'The item is already booked.')
    end
  end
end
