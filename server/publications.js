if (Meteor.isServer) {
  Meteor.publish('users', function () {
    return Meteor.users.find({}, { fields: { profile: 1 } });
  });

  Meteor.publishComposite('chats', function () {
    if (! this.userId) {
      return;
    }

    return {
      find: function () {
        return Chats.find({ userIds: this.userId });
      },
      children: [
        {
          find: function (chat) {
            return Messages.find({ chatId: chat._id });
          }
        },
        {
          find: function (chat) {
            var fields = { profile: 1 };
            return Meteor.users.find({ _id: { $in: chat.userIds } }, { fields: fields });
          }
        }
      ]
    }
  });
}