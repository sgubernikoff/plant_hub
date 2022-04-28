class CreateSeedlings < ActiveRecord::Migration[6.1]
  def change
    create_table :seedlings do |t|
      t.belongs_to :garden, null: false, foreign_key: true
      t.belongs_to :plant, null: false, foreign_key: true

      t.timestamps
    end
  end
end