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
    window.location.href = 'https://www.google.com/search?client=firefox-b-d&sca_esv=ba8d56c099ffe98e&sca_upv=1&sxsrf=ADLYWIKyECDaJr5oElQUoBylSSlDz7Q9BA:1718280302486&q=engels+volkers+la+moraleja&uds=ADvngMhWLxdD0hqgqE9I5Yd4cUhifDgBTq5EOcDegoQPpnv4p-X8WxLsb3Sqia2gY7i0pgteGi1vQxzWGgJGk37DIBQUgn_G2baPy7nWUxkPLV9XratVZufequuWleDsDPhdUO2WDz99&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7h0L
    