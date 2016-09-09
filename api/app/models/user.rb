class User < ApplicationRecord
  before_create :set_access_token

  has_many :bookings 
  has_many :items, through: :bookings

  validates :name, presence: true
  validates :email, presence: true

  def expire_access_token!
    self.access_token_expiration_date = Time.now
    self.save!
  end

  def refresh_access_token!
    set_access_token
    self.save!
  end

  def set_access_token
    self.access_token = generate_access_token
    self.access_token_expiration_date = Time.now + 1.days
  end

  def generate_access_token
    loop do
      token = SecureRandom.base64.tr('+/=', 'Qrt')
      break token unless User.exists?(access_token: token)
    end
  end
end
