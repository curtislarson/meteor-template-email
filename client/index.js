Router.route("/", function() {
  this.render("index");
});

Template.index.events({
  "submit .add-task-form": function(event) {
    var target = event.target;

    var title = target.title.value;
    var url = target.url.value;

    Meteor.call("addTask", title, url, function(err, or) {
      if (err) {
        console.log("Error adding task", err);
      }
      else {
        console.log("Add task successfull!")
      }
    });

    return false;
  },

  "click .send-email": function(event) {
    Meteor.call("sendEmail", function(err, or) {
      if (err) {
        console.log("Error sending email", err);
      }
      else {
        console.log("Send email successfull!")
      }
    });

    return false;
  }
});