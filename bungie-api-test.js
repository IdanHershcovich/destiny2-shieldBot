const { bungie_api_key } = require('./config.json');
const util = require('util')

const axios = require('axios')
const ghally_url = 'https://www.bungie.net/d1/platform/Destiny/Manifest/InventoryItem/1274330687/'
const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': bungie_api_key,
    },
}
getMilestones = async function () {
    axios
        .get('https://www.bungie.net/Platform/Destiny2/Milestones/', config
        ).catch(err => {
            console.log(err);
        }).then(response => {
            // console.log(response.data.Response)
            // console.log(util.inspect(response.data, false, null, true /* enable colors */))
            this.response = response.data
            console.log(this.response)
            return this.response

        });
}

getDefinitions = async function(hash_identifier) {
    axios
        .get(`https://www.bungie.net/Platform/Destiny2/Manifest/${hash_identifier}/`, config
        ).catch(err => {
            console.log(err);
        }).then (response => {
            console.log(response.data)
        })
}

// http.request(options, callback).end()

milestones = getMilestones().then(data => {
    console.log(data)
})

// console.log(milestones)

