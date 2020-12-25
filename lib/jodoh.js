const axios = require('axios')

const jodoh = (nama) => {
    return new Promise((resolve, reject) => {
        if (typeof nama === 'undefined') { reject('masukan parameter nama.') }
        var pasangan = nama.split(/\&/)
        var url = `http://www.primbon.com/kecocokan_nama_pasangan.php?nama=${pasangan[0]}&pasangan=${pasangan[1]}`
        axios.get(url)
            .then(res => {
                const { negatif, positif } = res.data
                resolve({ negatif, positif })
             })
    })
}

module.exports = jodoh
