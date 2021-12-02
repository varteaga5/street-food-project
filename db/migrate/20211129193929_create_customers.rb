class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :favFood

      t.timestamps
    end
  end
end
