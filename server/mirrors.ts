export function getMirrorAdresses() {
    let address = [] as any[]
    const os = require('os')
    const ifaces = os.networkInterfaces();


    for (var dev in ifaces) {
        var iface = ifaces[dev].filter(function(details) {
            return details.family === 'IPv4'
        });

        if(iface.length > 0) address.push(iface[0].address)
    }

    return address
}
