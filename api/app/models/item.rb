class Item < ApplicationRecord
  validates :name, presence: true
  validates :photo_url, presence: true
end
