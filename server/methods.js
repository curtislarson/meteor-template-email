Meteor.methods({
  addTask: function(title, url) {
    Tasks.insert({
      title: title,
      url: url
    });
  },

  sendEmail: function() {
    var tasks = Tasks.find({}).fetch();
    var emailData = {
      mainTitle: "Your List of Tasks",
      tasks: tasks,
      unsubscribe: "http://someunsubscribelink.com"
    };

    var body = EmailGenerator.generateHtml("emailTemplate", emailData);

    Meteor.call("sendMailgunEmail",
                "from@email.com",
                "From Name",
                ["to@email.com"],
                "Your List of Tasks",
                body);
  }
})