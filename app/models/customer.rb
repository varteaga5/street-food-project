class Customer < User
    belongs_to :user, optional: true

    validates :favFood, presence: true

end
