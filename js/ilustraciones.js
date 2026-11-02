// Ilustraciones de línea fina, todas en la misma escala (120 × 120) y sobre la misma línea de base (y = 104).
(function () {
  const BASE = '<path class="base" d="M14 104h92"/>';
  const D = {
    timbre: BASE + '<path d="M36 100h48M40 100c0-14 9-24 20-24s20 10 20 24"/><path d="M60 76v-6M56 70h8"/><path class="acento" d="M86 70l6-5M90 80h8M34 70l-6-5M30 80h-8"/>',
    telefono: BASE + '<rect x="30" y="66" width="60" height="34" rx="7"/><path d="M38 66c0-17 10-28 22-28s22 11 22 28"/><circle cx="60" cy="84" r="8"/><path d="M60 80v4l3 2"/><path class="acento" d="M94 40c6 4 9 10 8 17M100 32c10 7 14 18 12 29M26 40c-6 4-9 10-8 17M20 32c-10 7-14 18-12 29"/>',
    taza: BASE + '<path d="M32 100h56"/><path d="M38 64h40v18c0 10-9 18-20 18s-20-8-20-18z"/><path d="M78 70h6c5 0 8 3 8 7s-3 7-8 7h-7"/><path class="acento" d="M50 54c-4-5 4-8 0-14M60 54c-4-5 4-8 0-14M70 54c-4-5 4-8 0-14"/>',
    puerta: BASE + '<path d="M34 104V30h52v74"/><path d="M40 104V36h40v68"/><circle cx="73" cy="72" r="2.5"/><path class="acento" d="M20 104l8-10M100 104l-8-10"/>',
    agenda: BASE + '<rect x="32" y="34" width="56" height="66" rx="4"/><path d="M32 48h56M44 28v12M76 28v12"/><path d="M42 60h8M56 60h8M70 60h8M42 72h8M56 72h8M42 84h8"/><rect class="acento" x="68" y="68" width="12" height="10" rx="2"/>',
    gafete: BASE + '<path d="M60 22v20"/><rect x="38" y="42" width="44" height="58" rx="5"/><circle cx="60" cy="62" r="9"/><path d="M48 84h24M52 92h16"/><path class="acento" d="M54 42h12v6H54z"/>',
    silla: BASE + '<path d="M40 104V60M80 104V60M36 60h48M42 60V32h36v28"/><path d="M40 84h40"/><path class="acento" d="M92 36v18M86 42l6-6 6 6"/>',
    whatsapp: BASE + '<path d="M28 34h52a8 8 0 0 1 8 8v26a8 8 0 0 1-8 8H48l-14 12v-12h-6a8 8 0 0 1-8-8V42a8 8 0 0 1 8-8z"/><path d="M34 50h40M34 60h28"/><path class="acento" d="M84 86l5 5 10-12"/>',
    reloj: BASE + '<circle cx="60" cy="60" r="34"/><path d="M60 36v24l16 10"/><path d="M60 26v4M60 90v4M26 60h4M90 60h4"/><circle class="acento" cx="60" cy="60" r="3"/>',
    espejo: BASE + '<ellipse cx="60" cy="54" rx="26" ry="32"/><path d="M60 86v14M44 104h32"/><path class="acento" d="M48 38c4-6 10-8 16-7M46 48c2-4 5-6 8-7"/>',
    peine: BASE + '<path d="M28 58c8-20 56-20 64 0"/><path d="M34 52c4 18 48 18 52 0"/><circle cx="60" cy="40" r="10"/><path class="acento" d="M52 36c4 4 12 4 16 0"/><path d="M40 82h40v10H40zM46 82v-8M52 82v-8M58 82v-8M64 82v-8M70 82v-8M76 82v-8"/>',
    mano: BASE + '<path d="M42 100V62c0-3 2-5 5-5s5 2 5 5v14V44c0-3 2-5 5-5s5 2 5 5v32V40c0-3 2-5 5-5s5 2 5 5v36V48c0-3 2-5 5-5s5 2 5 5v34c0 10-8 18-18 18H52"/><path class="acento" d="M47 57v-6M57 39v-6M67 35v-6M77 43v-6"/>',
    arete: BASE + '<path d="M50 30c-10 4-12 22-4 30"/><circle cx="50" cy="66" r="4"/><path class="acento" d="M76 34v10"/><circle cx="76" cy="50" r="5"/><path d="M76 55v8l-6 12h12l-6-12"/>',
    celular: BASE + '<rect x="42" y="26" width="36" height="66" rx="6"/><path d="M54 32h12M56 84h8"/><path class="acento" d="M30 46l-6 6M30 64h-8M90 46l6 6M90 64h8"/>',
    manos: BASE + '<rect x="40" y="52" width="40" height="28" rx="2"/><path d="M48 60h24M48 68h16"/><path d="M14 74h18l8-6M14 86h20l6-6"/><path d="M106 74H88l-8-6M106 86H86l-6-6"/><path class="acento" d="M60 40v6M54 42l2 4M66 42l-2 4"/>',
    tablet: BASE + '<rect x="30" y="30" width="60" height="74" rx="6"/><path d="M38 44h44M38 54h44M38 64h30"/><path d="M40 86c6-6 10 6 16 0s10-6 14 0"/><circle class="acento" cx="60" cy="98" r="2"/>',
    pantalla: BASE + '<rect x="20" y="28" width="80" height="50" rx="3"/><path d="M60 78v18M44 100h32"/><path d="M28 40h30M28 52h22M28 64h26"/><path class="acento" d="M70 40h22M70 52h22M70 64h22"/>',
    pos: BASE + '<rect x="38" y="26" width="44" height="74" rx="6"/><rect x="44" y="34" width="32" height="18" rx="2"/><path d="M46 62h6M57 62h6M68 62h6M46 72h6M57 72h6M68 72h6M46 82h6M57 82h6M68 82h6"/><path class="acento" d="M82 44h14M82 52h10"/>',
    alerta: BASE + '<path d="M60 26l38 66H22z"/><path d="M60 50v20"/><circle cx="60" cy="80" r="2.5"/><path class="acento" d="M26 40l-8-6M94 40l8-6"/>',
    llave: BASE + '<circle cx="42" cy="60" r="14"/><circle cx="42" cy="60" r="5"/><path d="M56 60h44M88 60v12M78 60v8"/><path class="acento" d="M42 30v8M28 36l5 6M56 36l-5 6"/>'
  };

  // Escena del juego «encuentra los detalles»: recepcionista frente al espejo (360 × 360).
  const FIGURA = '<g class="lin">' +
    '<path d="M40 340h280"/>' +
    // cabello con mechones sueltos
    '<path d="M126 74c-6-34 20-52 46-50 28 2 46 22 40 54"/>' +
    '<path class="acento" d="M120 70c-14 18-12 40-4 58M112 92c-6 12-4 26 2 38M206 80c10 14 10 30 4 44"/>' +
    // rostro sin rasgos
    '<ellipse cx="170" cy="108" rx="40" ry="48"/>' +
    '<path d="M150 104h8M182 104h8M162 130c6 4 12 4 18 0"/>' +
    // arete grande colgante
    '<path class="acento" d="M210 116v12"/><circle class="acento" cx="214" cy="140" r="10"/><path class="acento" d="M214 150l-6 16h12z"/>' +
    // cuello y blusa
    '<path d="M154 152v16M186 152v16"/>' +
    '<path d="M100 340V214c0-30 24-46 48-48l22 22 22-22c24 2 48 18 48 48v126"/>' +
    '<path d="M170 188v152"/>' +
    // sin gafete: solo el lugar
    '<rect class="punteado" x="130" y="232" width="40" height="30" rx="3"/>' +
    // brazo derecho con celular
    '<path d="M240 222l20 66"/><rect class="acento" x="242" y="270" width="26" height="44" rx="5"/>' +
    // brazo izquierdo con uñas largas
    '<path d="M100 226l-14 70"/><path d="M76 296h22"/><path class="acento" d="M78 296l-4 16M84 296l-2 18M90 296l0 18M96 296l2 16"/>' +
    '</g>';

  function svg(clave, clase) {
    const d = D[clave] || D.timbre;
    return '<svg class="ilus ' + (clase || '') + '" viewBox="0 0 120 120" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
  }

  window.Ilus = {
    svg,
    figura() {
      return '<svg class="escena-errores" viewBox="0 0 360 360" fill="none" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Recepcionista que todavía no está lista para abrir">' + FIGURA + '</svg>';
    }
  };
})();
