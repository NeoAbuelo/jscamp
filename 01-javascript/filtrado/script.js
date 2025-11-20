// const filterTecnologia = document.querySelector('#filter-ubicacion');
// const mensaje = document.querySelector('#filter-selected-value');

// filterTecnologia.addEventListener('change', function(event) {
//     const selectedValue = event.target.value;
//     if(selectedValue){
//         mensaje.textContent = `Has seleccionado: ${selectedValue}`;
//     }else{
//         mensaje.textContent = '';
//     }    
// });


// const empleosSearchInput = document.querySelector('#empleos-search-input');

// empleosSearchInput.addEventListener('input', function(event) {
//     console.log(event.target.value);
// });

// empleosSearchInput.addEventListener('blur', function(event) {
//     console.log('El input ha perdido el foco');
// });

// const searchForm = document.querySelector('#empleos-searh-form');

// searchForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.log('El formulario ha sido enviado');
//     });


// document.addEventListener('keydown', function(event) {
//     console.log(`tecla presionada: ${event.key}`);
//     console.log(`tecla presionada shif: ${event.shiftKey}`);
//     console.log(`tecla presionada ctrl: ${event.ctrlKey}`);
//     console.log(`tecla presionada alt: ${event.altKey}`);
// });

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


const filterTecnologia = document.querySelector('#filter-tecnologia');
const mensaje = document.querySelector('#filter-selected-value');

const jobs = document.querySelectorAll('.job-listing-card');

filterTecnologia.addEventListener('change', function(event) {
    const selectedValue = event.target.value;
    if(selectedValue){
        mensaje.textContent = `Has seleccionado: ${selectedValue}`;
    }else{
        mensaje.textContent = '';
    }    

    jobs.forEach(function(job) {        
        //const tecnologia = job.dataset.tecnologia;
        const tecnologia = job.getAttribute('data-tecnologia');
        const isShow = selectedValue === '' || tecnologia === selectedValue;
        job.classList.toggle('is-hidden', !isShow);

        // if(selectedValue === '' || tecnologia === selectedValue) {
        //     job.classList.remove('is-hidden');
        // }else{
        //     job.classList.add('is-hidden');
        // }

    });

});