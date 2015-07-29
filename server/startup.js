Meteor.startup(function() {
  var templates = [];
  templates.push({
    name: "emailTemplate",
    path: "email-template.html"
  });
  EmailGenerator.addTemplates(templates);

  var smtp = {
    username: Meteor.settings.mailgun_login,
    password: Meteor.settings.mailgun_password,
    server: Meteor.settings.mailgun_hostname,
    port: 25
  };

  process.env.MAIL_URL = "smtp://" + encodeURIComponent(smtp.username) + ":" +
    encodeURIComponent(smtp.password) + "@" + encodeURIComponent(smtp.server) +
    ":" + smtp.port;
});