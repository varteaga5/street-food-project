class Vendor < ApplicationRecord
    # belongs_to :customer
    has_secure_password

    validates :username, presence: true, uniqueness: true

end
