class Item < ApplicationRecord
  # Associations 
  has_many :bookings
  has_many :waiting_queues
  has_many :users, through: :bookings
  has_many :waiting_users, through: :waiting_queues
  has_many :item_categories
  has_many :categories, through: :item_categories

  # Validations
  validates :name, presence: true
  validates :photo_url, presence: true

  def current_booking
    b = bookings.order(:created_at).last
    b && b.end_date > Time.now ? b : nil
  end

  def current_owner
    current_booking ? current_booking.user : nil
  end
end
