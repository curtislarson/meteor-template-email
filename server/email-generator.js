EmailGenerator = {};

EmailGenerator.addTemplates = function(templates) {
  templates.forEach(function(template) {
    SSR.compileTemplate(template.name, Assets.getText(template.path));
  });
}

EmailGenerator.generateHtml = function(templateName, data) {
  var html = null;
  try {
    html = SSR.render(templateName, data);
  }
  catch (err) {
    console.log("meteor-template-email: Unable to generate html, err:", err);
  }
  return html;
}