module Api::V1
  class BookingsController < ApplicationController
    before_action :set_booking, only: [:show, :update, :destroy] 

    # GET /bookings
    def index
      @bookings = Booking.all

      render json: @bookings
    end

    # POST /bookings
    def create
      @booking = Booking.new(booking_params)

      if @booking.save
        render json: @booking, status: :created, location: v1_item_path(@booking)
      else
        if @booking.errors.has_key?(:item_already_booked)
          @waiting_queue = WaitingQueue.create(item: @booking.item,
                                               user: @booking.user)
          render json: @waiting_queue, status: :created
        else
          render json: @booking.errors, status: :unprocessable_entity
        end
      end
    end

    # PATCH/PUT /bookings/1
    def update
      if @booking.update(booking_params)
        render json: @booking
      else
        render json: @booking.errors, status: :unprocessable_entity
      end
    end

    #DELETE /bookings/1
    def destroy
      if @booking.destroy
        render json: @item, status: :deleted
      else
        render json: @item.errors, status: :conflict
      end
    end

    private

    def set_booking
      @booking = Booking.find(params[:id])
    end

    def booking_params
      params.require(:booking).permit(:user_id, :item_id, :start_date, :end_date)
    end
  end
end
