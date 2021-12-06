class Customer < User
    belongs_to :user

    has_secure_password

    validates :favFood, presence: true

end
