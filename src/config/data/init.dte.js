db = db.getSiblingDB('iconstruye'); // Cambia "iconstruye" si tu base de datos tiene otro nombre

db.createCollection('dte'); // Crea la colección "dte" si no existe

db.dte.insertMany([
  {
    dteId: "DTE-2025-04-08-001",
    tipoDocumento: "Factura Electronica",
    folio: "123",
    emisor: {
      rut: "761234567",
      razonSocial: "UniversdteIdad de Ejemplo A"
    },
    receptor: {
      rut: "127890123",
      razonSocial: "Empresa Alfa"
    },
    fechaEmision: "2025-04-08",
    montoNeto: 15000,
    iva: 2850,
    montoTotal: 17850
  },
  {
    dteId: "DTE-2025-04-08-002",
    tipoDocumento: "Boleta Electronica",
    folio: "456",
    emisor: {
      rut: "769876543",
      razonSocial: "UniversdteIdad de Ejemplo B"
    },
    receptor: {
      rut: "111111111",
      razonSocial: "ConsumdteIdor Final"
    },
    fechaEmision: "2025-04-08",
    montoNeto: 5000,
    iva: 950,
    montoTotal: 5950
  },
  {
    dteId: "DTE-2025-04-09-003",
    tipoDocumento: "Nota de Credito Electronica",
    folio: "001",
    emisor: {
      rut: "761234567",
      razonSocial: "UniversdteIdad de Ejemplo A"
    },
    receptor: {
      rut: "127890123",
      razonSocial: "Empresa Alfa"
    },
    fechaEmision: "2025-04-09",
    montoNeto: -1000,
    iva: -190,
    montoTotal: -1190
  },
  {
    dteId: "DTE-2025-04-09-004",
    tipoDocumento: "Factura Electronica",
    folio: "789",
    emisor: {
      rut: "77555444k",
      razonSocial: "UniversdteIdad de Ejemplo C"
    },
    receptor: {
      rut: "991112222",
      razonSocial: "Organizacion Beta"
    },
    fechaEmision: "2025-04-09",
    montoNeto: 22000,
    iva: 4180,
    montoTotal: 26180
  },
  {
    dteId: "DTE-2025-04-10-005",
    tipoDocumento: "Guia de Despacho Electronica",
    folio: "015",
    emisor: {
      rut: "761234567",
      razonSocial: "UniversdteIdad de Ejemplo A"
    },
    receptor: {
      rut: "127890123",
      razonSocial: "Empresa Alfa"
    },
    fechaEmision: "2025-04-10",
    detalles: ["Producto X", "Servicio Y"],
    montoNeto: 0,
    iva: 0,
    montoTotal: 0
  },
  {
    dteId: "DTE-2025-04-10-006",
    tipoDocumento: "Factura Electronica",
    folio: "101",
    emisor: {
      rut: "782223331",
      razonSocial: "UniversdteIdad de Ejemplo D"
    },
    receptor: {
      rut: "556667778",
      razonSocial: "Comercio Gamma"
    },
    fechaEmision: "2025-04-10",
    montoNeto: 8000,
    iva: 1520,
    montoTotal: 9520
  },
  {
    dteId: "DTE-2025-04-11-007",
    tipoDocumento: "Boleta Electronica",
    folio: "500",
    emisor: {
      rut: "769876543",
      razonSocial: "UniversdteIdad de Ejemplo B"
    },
    receptor: {
      rut: "222222222",
      razonSocial: "ConsumdteIdor Final"
    },
    fechaEmision: "2025-04-11",
    montoNeto: 1200,
    iva: 228,
    montoTotal: 1428
  },
  {
    dteId: "DTE-2025-04-11-008",
    tipoDocumento: "Nota de Debito Electronica",
    folio: "005",
    emisor: {
      rut: "77555444k",
      razonSocial: "UniversdteIdad de Ejemplo C"
    },
    receptor: {
      rut: "991112222",
      razonSocial: "Organizacion Beta"
    },
    fechaEmision: "2025-04-11",
    montoNeto: 500,
    iva: 95,
    montoTotal: 595
  },
  {
    dteId: "DTE-2025-04-12-009",
    tipoDocumento: "Factura Electronica",
    folio: "200",
    emisor: {
      rut: "782223331",
      razonSocial: "UniversdteIdad de Ejemplo D"
    },
    receptor: {
      rut: "112223334",
      razonSocial: "Empresa Delta"
    },
    fechaEmision: "2025-04-12",
    montoNeto: 30000,
    iva: 5700,
    montoTotal: 35700
  },
  {
    dteId: "DTE-2025-04-12-010",
    tipoDocumento: "Boleta Electronica",
    folio: "600",
    emisor: {
      rut: "761234567",
      razonSocial: "UniversdteIdad de Ejemplo A"
    },
    receptor: {
      rut: "333333333",
      razonSocial: "ConsumdteIdor Final"
    },
    fechaEmision: "2025-04-12",
    montoNeto: 750,
    iva: 142,
    montoTotal: 892
  }
]);