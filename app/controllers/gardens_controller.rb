class GardensController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    wrap_parameters format: []

    def index
        render json: Garden.all
    end

    def show
        garden = Garden.find(params[:id])
        render json: garden, include: :plants, status: :created
    end

    def create
        garden = Garden.create!(garden_params)
        render json: garden, status: :created
    end

    def update
        garden = Garden.find(params[:id])
        user.update!(garden_params)
        render json: garden
    end

    def destroy
        garden = Garden.find(params[:id])
        garden.destroy
        head :no_content
    end

    private

    def garden_params
        params.permit(:name, :user_id)
    end

    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found_response
        render json: {error: "Garden not found"}, status: :not_found
    end
end
