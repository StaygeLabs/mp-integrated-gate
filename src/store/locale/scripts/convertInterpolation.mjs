const csvtojson = require('csvtojson');

async function convertInterpolation(json) {
  return JSON.parse(JSON.stringify(json).replace(/\${([^}]+)}/g, '{{$1}}'));
}

export default convertInterpolation;
