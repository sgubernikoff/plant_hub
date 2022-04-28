class SeedlingsController < ApplicationController

    def create
        seedling = Seedling.create!(seedling_params)
        render json: seedling, status: :created
    end

    private 

    def seedling_params
        params.permit(:garden_id, :plant_id)
    end
end
