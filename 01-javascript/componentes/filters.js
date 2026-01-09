
const filterTecnologia = document.querySelector('#filter-tecnologia');
const mensaje = document.querySelector('#filter-selected-value');


filterTecnologia.addEventListener('change', function(event) {
    const jobs = document.querySelectorAll('.job-listing-card');
    const selectedValue = event.target.value;
    if(selectedValue){
        mensaje.textContent = `Has seleccionado: ${selectedValue}`;
    }else{
        mensaje.textContent = '';
    }    
    jobs.forEach(function(job) {        
        const tecnologia = job.getAttribute('data-tecnologia').split(',').map(tech => tech.trim());
        const isShow = selectedValue === '' || tecnologia.includes(selectedValue);
        job.classList.toggle('is-hidden', !isShow);
    });
})

const filterModalidad = document.querySelector('#filter-modalidad');

filterModalidad.addEventListener('change', function(event) {
    const jobs = document.querySelectorAll('.job-listing-card');
    const selectedValue = event.target.value;
    jobs.forEach(function(job) {
        const modalidad = job.getAttribute('data-modalidad');
        const isShow = selectedValue === '' || modalidad === selectedValue;
        job.classList.toggle('is-hidden', !isShow);
    });
});

const filterExperiencia = document.querySelector('#filter-experiencia-level');

filterExperiencia.addEventListener('change', function(event) {
    const jobs = document.querySelectorAll('.job-listing-card');
    const selectedValue = event.target.value;
    jobs.forEach(function(job) {
        const nivel = job.getAttribute('data-nivel');
        const isShow = selectedValue === '' || nivel === selectedValue;
        job.classList.toggle('is-hidden', !isShow);
    });
}); 