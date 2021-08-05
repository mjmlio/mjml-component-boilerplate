const mjml2html = require('mjml')
const clipboardy = require('clipboardy');

const { html } = mjml2html(`<mjml>
  <mj-body>

    <paragraph>
      test text
    </paragraph>

    <paragraph>
      test text1
    </paragraph>

  </mj-body>
</mjml>
`, {
  mjmlConfigPath: "./mjmlconfig"
})

clipboardy.writeSync(html);
console.log("Paste your clipboard into editor and find class 'test-class'");
