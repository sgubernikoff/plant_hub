class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :species
      t.integer :price
      t.string :image

      t.timestamps
    end
  end
end
