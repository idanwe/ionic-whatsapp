Meteor.methods({
  newMessage(message) {
    check(message, {
      text: String,
      chatId: String
    });

    message.timestamp = new Date();

    var messageId = Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });
    return messageId;
  }
});
