class WaitingQueue < ApplicationRecord
  # Associations 
  belongs_to :user
  belongs_to :item

  # Validations
  validates :user_id, presence: true
  validates :item_id, presence: true
end
