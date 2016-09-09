module Api::V1
  class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: :create

    def create
      @user = User.new(user_params)

      if @user.save
        render json: @user, status: :created
      else
        render json: { errors: @user.errors }, status: :unprocessable_entity
      end
    end

    def update
      if current_user.update(user_params)
        render json: @user
      else
        render json: { errors: @user.errors }, status: :unprocessable_entity
      end
    end

    def destroy
      current_user.destroy
      render json: { message: 'User deleted.' }, status: :ok
    end

    private

    def user_params
      params.require(:user).permit(:name, :password, :email)
    end
  end
end
