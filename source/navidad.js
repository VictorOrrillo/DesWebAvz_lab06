function navidad() {
    var moment = require('moment')
    var hoy = new Date(); //fecha de hoy
    var navidad = new Date(hoy.getFullYear(), 12, 25) //navidad
    
    if (hoy.getMonth() + 1 == 12 && hoy.getDate() == 25) {
        navidad = new Date(hoy.getFullYear() + 1, 12, 25)
    }
    
    var fhoy = moment(hoy)
    var fnavidad = moment(navidad)

    var dias = fnavidad.diff(fhoy, 'dias')

    return dias;
}

module.exports = { navidad }