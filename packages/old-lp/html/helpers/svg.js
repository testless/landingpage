const fs = require('fs');
const handlebars = require('handlebars');
const ltx = require('ltx');
const {join} = require('path');

const cache = {};

function parse(xml) {
  const svg = ltx.parse(xml);
  if (svg.name != 'svg') {
    throw new TypeError("Input must be an SVG");
  }

  delete svg.attrs.xmlns;
  delete svg.attrs['xmlns:xlink'];

  return svg;
}

module.exports = function(name, opts) {

  name = name.replace('{data}', opts.hash.data)

  try {
    const content = cache[name] || (cache[name] = fs.readFileSync(join(__dirname, '../..', name), 'utf-8'));

    const svg = parse(content);

    Object.assign(svg.attrs, opts.hash);

    return new handlebars.SafeString(svg.root().toString());
  }  catch(e) {
    console.error(e.message)

    return `<img alt="No such file ${name}">`
  }
}

