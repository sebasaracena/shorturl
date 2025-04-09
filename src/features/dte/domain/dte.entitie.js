class DTE {
    constructor(
        id,
        tipoDocumento,
        folio,
        emisor,
        receptor,
        fechaEmision,
        montoNeto,
        iva,
        montoTotal
    ) {
        this.id = id;
        this.tipoDocumento = tipoDocumento;
        this.folio = folio;
        this.emisor = emisor; // Objeto con rut y razonSocial
        this.receptor = receptor; // Objeto con rut y razonSocial
        this.fechaEmision = fechaEmision;
        this.montoNeto = montoNeto;
        this.iva = iva;
        this.montoTotal = montoTotal;
    }
}

module.exports = DTE;