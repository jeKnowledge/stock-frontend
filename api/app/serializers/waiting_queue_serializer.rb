class WaitingQueueSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :item_id, :created_at
end
