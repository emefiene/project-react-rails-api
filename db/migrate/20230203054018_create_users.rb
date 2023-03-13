class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password
      t.string :age
      t.string :address
      t.string :image

      t.timestamps
    end
  end
end
