
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
        const tecnologia = job.getAttribute('data-tecnologia');
        const isShow = selectedValue === '' || tecnologia.includes(selectedValue);
        job.classList.toggle('is-hidden', !isShow);
    });
})