var Mailgun = Meteor.npmRequire("mailgun").Mailgun;
var mg = new Mailgun(Meteor.settings.mailgun_apikey);

Meteor.methods({
  sendMailgunEmail: function(fromEmail,
                             fromName,
                             toEmails,
                             subject,
                             body,
                             callback) {
    var toListString = toEmails.join(",");
    mg.sendRaw(fromName + " <" + fromEmail + ">",
               toEmails,
               "From: " + fromEmail +
                "\nTo: " + toListString +
                "\nContent-Type: text/html; charset=utf-8" +
                "\nSubject: " + subject +
                "\n\n" + body,
                function(err) {
      if (err) {
        callback(err, undefined);
      }
      else {
        callback(undefined, true);
      }
    });
  }
})