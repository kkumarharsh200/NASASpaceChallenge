const axios = require('axios');
axios.post('https://ntrs.nasa.gov/api/citations/search').then((data)=>

data.data.results.map((item) => {
    console.log(JSON.stringify(item.sourceIdentifiers))
})
)


