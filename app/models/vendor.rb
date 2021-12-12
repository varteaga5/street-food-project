class Vendor < User
    belongs_to :user, optional: true
    has_many :menus

    validates :companyName, presence: true, uniqueness: true
    validates :foodType, presence: true

end

