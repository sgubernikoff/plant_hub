class PlantsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    wrap_parameters format: []

    def index
        render json: Plant.all
    end

    def show
        plant = Plant.find(params[:id])
        render json: plant, status: :created
    end

    def create
        plant = Plant.create!(plant_params)
        render json: plant, status: :created
    end

    def destroy
        plant = Plant.find(params[:id])
        plant.destroy
        head :no_content
    end

    private

    def plant_params
        params.permit(:name, :species, :price, :image, :garden_id, :user_id)
    end

    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found_response
        render json: {error: "plant not found"}, status: :not_found
    end
end
