class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true


  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable

  def customer?
    type == 'Customer'
  end

  def seller?
    type == 'Seller'
  end

end
