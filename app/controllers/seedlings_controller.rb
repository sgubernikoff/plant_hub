class SeedlingsController < ApplicationController

    def index
        render json: Seedling.all
    end

    def show
        seedling = Seedling.find(params[:id])
        render json: seedling, status: :created
    end

    def create
        seedling = Seedling.create!(seedling_params)
        plant = Plant.find(seedling.plant_id)
        render json: plant, status: :created
    end

    def destroy
        seedling = Seedling.find(params[:id])
        seedling.destroy
        head :no_content
    end

    private 

    def seedling_params
        params.permit(:garden_id, :plant_id)
    end
end
