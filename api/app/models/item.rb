class Item < ApplicationRecord
  validates :name, presence: true
  validates :photo_url, presence: true

  has_many :bookings
  has_many :users, through: :bookings
  has_many :item_categories
  has_many :categories, through: :item_categories
end
