document.getElementById('calculateBtn').addEventListener('click', function() {
    const price = parseFloat(document.getElementById('price').value);
    const obraNueva = document.querySelector('input[name="obraNueva"]:checked').value;
    const hipoteca = document.querySelector('input[name="hipoteca"]:checked').value;

    if (isNaN(price) || price <= 0) {
        alert('Por favor, introduzca un precio válido.');
        return;
    }

    const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const reserva = (price * 0.01).toFixed(2);
    const impuestoTransmisionPorcentaje = obraNueva === 'si' ? '10%' : '6%';
    const impuestoTransmision = (price * (obraNueva === 'si' ? 0.10 : 0.06)).toFixed(2);
    const notariaPorcentaje = '0.5%';
    const notaria = (price * 0.005).toFixed(2);
    const arras = (price * 0.10).toFixed(2);
    const total = (parseFloat(reserva) + parseFloat(impuestoTransmision) + parseFloat(notaria) + parseFloat(arras)).toFixed(2);

    document.getElementById('reserva').textContent = `€${formatNumber(reserva)}`;
    document.getElementById('impuestoTransmision').textContent = `€${formatNumber(impuestoTransmision)}`;
    document.getElementById('impuestoTransmisionPorcentaje').textContent = impuestoTransmisionPorcentaje;
    document.getElementById('notaria').textContent = `€${formatNumber(notaria)}`;
    document.getElementById('notariaPorcentaje').textContent = notariaPorcentaje;
    document.getElementById('arras').textContent = `€${formatNumber(arras)}`;
    document.getElementById('total').textContent = `€${formatNumber(total)}`;
});

document.getElementById('reviewBtn').addEventListener('click', function() {
    window.location.href = 'https://www.google.com/search?client=firefox-b-d&sca_esv=ba8d56c099ffe98e&sca_upv=1&sxsrf=ADLYWIKyECDaJr5oElQUoBylSSlDz7Q9BA:1718280302486&q=engels+volkers+la+moraleja&uds=ADvngMhWLxdD0hqgqE9I5Yd4cUhifDgBTq5EOcDegoQPpnv4p-X8WxLsb3Sqia2gY7i0pgteGi1vQxzWGgJGk37DIBQUgn_G2baPy7nWUxkPLV9XratVZufequuWleDsDPhdUO2WDz99&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7h0L263KZOVWOjIIqnVUquHAC6KctDxt_dK7Jpno1POFdNQFu9B30JvU6ls6f9GU6E29kmg%3D&sa=X&ved=2ahUKEwjchrf4xNiGAxUJ-QIHHSEsAEEQ3PALegQIFhAE&biw=1280&bih=611&dpr=1.5';
});

// Language switcher logic
document.getElementById('esBtn').addEventListener('click', function() {
    switchLanguage('es');
});

document.getElementById('engBtn').addEventListener('click', function() {
    switchLanguage('eng');
});

function switchLanguage(lang) {
    if (lang === 'es') {
        document.getElementById('mainTitle').textContent = 'OFERTA DEL INMUEBLE';
        document.getElementById('priceLabel').textContent = 'Precio del inmueble:';
        document.getElementById('obraNuevaLabel').textContent = 'Obra nueva:';
        document.getElementById('hipotecaLabel').textContent = 'Hipoteca:';
        document.getElementById('calculateBtn').textContent = 'Calcular';
        document.getElementById('callTaniaBtn').textContent = 'Llámame (Tania Q.)';
        document.getElementById('whatsappBtn').textContent = 'Whatsapp';
        document.getElementById('reviewBtn').textContent = 'Déjame una reseña';
        document.querySelectorAll('#results p')[0].childNodes[0].textContent = '1% de reserva: ';
        document.querySelectorAll('#results p')[1].childNodes[0].textContent = 'Impuesto de transmisión: ';
        document.querySelectorAll('#results p')[2].childNodes[0].textContent = 'Gastos de notaría: ';
        document.querySelectorAll('#results p')[3].childNodes[0].textContent = '10% de arras: ';
        document.querySelectorAll('#results p')[4].childNodes[0].textContent = 'Total a pagar: ';
        document.getElementById('disclaimer').innerHTML = '<p>Descargo de Responsabilidad</p><p>La información proporcionada en este informe es aproximada y puede estar sujeta a cambios. Recomendamos usar estos datos como guía general.</p>';
    } else if (lang === 'eng') {
        document.getElementById('mainTitle').textContent = 'PROPERTY OFFER';
        document.getElementById('priceLabel').textContent = 'Property price:';
        document.getElementById('obraNuevaLabel').textContent = 'New build:';
        document.getElementById('hipotecaLabel').textContent = 'Mortgage:';
        document.getElementById('calculateBtn').textContent = 'Calculate';
        document.getElementById('callTaniaBtn').textContent = 'Call me (Tania Q.)';
        document.getElementById('whatsappBtn').textContent = 'Whatsapp';
        document.getElementById('reviewBtn').textContent = 'Leave a review';
        document.querySelectorAll('#results p')[0].childNodes[0].textContent = '1% reservation: ';
        document.querySelectorAll('#results p')[1].childNodes[0].textContent = 'Transfer tax: ';
        document.querySelectorAll('#results p')[2].childNodes[0].textContent = 'Notary fees: ';
        document.querySelectorAll('#results p')[3].childNodes[0].textContent = '10% deposit: ';
        document.querySelectorAll('#results p')[4].childNodes[0].textContent = 'Total to pay: ';
        document.getElementById('disclaimer').innerHTML = '<p>Disclaimer</p><p>The information provided in this report is approximate and may be subject to change. We recommend using this data as a general guide.</p>';
    }
}
