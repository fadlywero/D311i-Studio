// D311i Studio Bengkel Kelistrikan Digital
// Perhitungan Daya & Kestabilan Sistem Fullwave NMAX / KLX 150

function auditSistemKelistrikan(voltaseAki, bebanAmpere) {
  const totalWatt = voltaseAki * bebanAmpere;
  const statusKiprok = voltaseAki >= 13.8 && voltaseAki <= 14.8 
    ? "OPTIMAL_PENGISIAN_SEMPURNA" 
    : (voltaseAki < 13.8 ? "UNDERCHARGE_CEK_SPUL" : "OVERCHARGE_KIPROK_JEBOL");

  return {
    voltase: voltaseAki + " V",
    arus: bebanAmpere + " A",
    daya: totalWatt.toFixed(1) + " Watt",
    kesehatanKiprok: statusKiprok,
    mekanikBertugas: "Fadly Wero #111",
    timestamp: new Date().toISOString()
  };
}

module.exports = auditSistemKelistrikan(14.2, 8.5);