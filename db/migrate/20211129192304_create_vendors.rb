class CreateVendors < ActiveRecord::Migration[6.1]
  def change
    create_table :vendors do |t|
      # t.belongs_to :customer, null: false, foreign_key: true
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :foodType
      t.string :companyName
      t.boolean :isVendor

      t.timestamps
    end
  end
end
