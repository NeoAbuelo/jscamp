const jobListingSection = document.querySelector('.jobs-listings');

if(jobListingSection) {
    jobListingSection.addEventListener('click', function(event) {
        const elemento = event.target;
    
        if (elemento.classList.contains('button-apply-job')) {
            elemento.textContent = '¡Aplicado!';
            elemento.classList.add('is-applied');
            elemento.disabled = true;   
        }
    });
}



const filterTecnologia = document.querySelector('#tecnologia');
const filterUbicacion = document.querySelector('#ubicacion');
const filterTipo = document.querySelector('#contrato');
const filterExperiencia = document.querySelector('#lvlexp');

filterTecnologia.addEventListener('change', function(event) {
    console.log(event.target.value);
    const elementos = document.querySelectorAll('.job-listing-card');
    elementos.forEach(function(elemento) {
        const tecnologia = elemento.getElementsByTagName('small')[0].textContent.toLowerCase();
        if(!tecnologia.includes(event.target.value)) {
            elemento.style.display = 'none';
        }else{
            elemento.style.display = 'flex';
        }
    });
});

filterUbicacion.addEventListener('change', function(event) {
    console.log(event.target.value);
    const elementos = document.querySelectorAll('.job-listing-card');
    elementos.forEach(function(elemento) {
        const ubi = elemento.getElementsByTagName('small')[0].textContent.toLowerCase();
        if(!ubi.includes(event.target.value)) {
            elemento.style.display = 'none';
        }else{
            elemento.style.display = 'flex';
        }
    });
});
filterTipo.addEventListener('change', function(event) {
    console.log(event.target.value);
     const elementos = document.querySelectorAll('.job-listing-card');
    elementos.forEach(function(elemento) {
        const tipo = elemento.getElementsByTagName('small')[0].textContent.toLowerCase();
        if(!tipo.includes(event.target.value)) {
            elemento.style.display = 'none';
        }else{
            elemento.style.display = 'flex';
        }
    });
});
filterExperiencia.addEventListener('change', function(event) {
    console.log(event.target.value);
});