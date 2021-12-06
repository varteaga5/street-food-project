class Vendor < User
    belongs_to :user

    has_secure_password

    validates :companyName, presence: true, uniqueness: true
    validates :foodType, presence: true

end

