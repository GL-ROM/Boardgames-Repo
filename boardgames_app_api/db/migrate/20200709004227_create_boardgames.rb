class CreateBoardgames < ActiveRecord::Migration[6.0]
  def change
    create_table :boardgames do |t|
      t.string :box_art
      t.string :name
      t.integer :min_players
      t.integer :max_players
      t.integer :min_playtime
      t.integer :max_playtime
      t.string :publisher

      t.timestamps
    end
  end
end
