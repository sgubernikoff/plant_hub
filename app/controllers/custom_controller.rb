class CustomController < ApplicationController

    def clear_seedlings
        user = User.find(params[:id])
        user.gardens.first.seedlings.destroy_all
        render json: {message: "Garden Cleared"}
    end

end
