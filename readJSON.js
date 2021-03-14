const fs = require('fs');
const util = require('util')

const rawdata = fs.readFileSync('lost_sectors.json');
const data = JSON.parse(rawdata);
// console.log(util.inspect(data, {depth: null, colors: true}))


function getName(ls_name) {
    var parsed = data['data']
    console.log(ls_name)
    var data_length = Object.keys(parsed).length
    for (var i = 0; i < data_length; i++) {
        if (parsed[i].name.includes(ls_name)) {
            console.log(parsed[i])
            return parsed[i]
        }
    }
}


var veles = getName("Veles")


console.log(veles.shields[0]['Legend'])