document.addEventListener('DOMContentLoaded', function() {
    const servicesData = {
        'full-aseo': {
            title: 'Solo Aseo',
            description: 'Descripción y tarifas de Solo Aseo...',
        },
        'nanny': {
            title: 'Servicio de Niñeras',
            description: 'Descripción y tarifas del Servicio de Niñeras...',
        },
        // Agrega las descripciones y tarifas restantes aquí...
    };

    document.querySelectorAll('.service-box').forEach(box => {
        box.addEventListener('click', function() {
            const service = servicesData[this.getAttribute('data-service')];
            const detailsHTML = `
                <h2>${service.title}</h2>
                <p>${service.description}</p>
            `;
            document.getElementById('service-details').innerHTML = detailsHTML + document.getElementById('service-details').innerHTML;
            document.getElementById('service-details').classList.remove('hidden');
            document.getElementById('services').classList.add('hidden');
        });
    });

    document.getElementById('back-to-services').addEventListener('click', function() {
        document.getElementById('service-details').classList.add('hidden');
        document.getElementById('services').classList.remove('hidden');
    });
});
