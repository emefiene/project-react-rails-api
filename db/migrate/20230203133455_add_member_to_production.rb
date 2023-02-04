class AddMemberToProduction < ActiveRecord::Migration[6.1]
  def change
    add_reference :productions, :member, null: false, foreign_key: true
  end
end
