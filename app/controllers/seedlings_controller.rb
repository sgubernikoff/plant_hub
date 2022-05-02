class SeedlingsController < ApplicationController


    def create
        seedling = Seedling.create!(seedling_params)
        plant = Plant.find(seedling.plant_id)
        render json: plant, status: :created
    end

    private 

    def seedling_params
        params.permit(:garden_id, :plant_id)
    end
end
