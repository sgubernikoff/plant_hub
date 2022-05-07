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
        render json: seedling, status: :created
    end

    def destroy
        seedling = Seedling.find(params[:id])
        seedling.destroy
        garden = Garden.find(seedling.garden_id)
        render json: garden
    end

    private 

    def seedling_params
        params.permit(:garden_id, :plant_id)
    end
end
