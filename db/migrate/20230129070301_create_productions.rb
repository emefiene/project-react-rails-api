class CreateProductions < ActiveRecord::Migration[6.1]
  def change
    create_table :productions do |t|
      t.string :description
      t.string :image
      t.integer :price
      t.integer :quantity
      t.timestamps
    end
  end
end

