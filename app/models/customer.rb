class Customer < ApplicationRecord
    # has_many :vendors
    has_secure_password

    validates :username, presence: true, uniqueness: true

end
