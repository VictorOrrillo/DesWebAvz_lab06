function edad(años, meses, dias) {
    var moment = require('moment')

    var cumpleaños = new Date(años, meses, dias)
    var hoy = new Date()

    var fcumpleaños = moment(cumpleaños)
    var fhoy = moment(hoy)

    var años = fhoy.diff(fcumpleaños, 'años')

    return edad
}

module.exports = { edad }