class CreateOwners < ActiveRecord::Migration[6.1]
  def change
    create_table :owners do |t|
      t.string :description
      t.string :image
      t.integer :price
      t.integer :rating
      t.integer :quantity

      t.timestamps
    end
  end
end
