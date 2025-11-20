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
});

const jobConteiner = document.querySelector('.jobs-listings');

fetch("./data.json")
.then(response => {
    return response.json();
}).then((jobs) => {
    jobs.forEach((job) => {
       const articule = document.createElement('article'); 
       articule.classList.add('job-listing-card');
       articule.setAttribute('data-tecnologia', job.data.technology);
       articule.setAttribute('data-modalidad', job.data.modalidad);
       articule.setAttribute('data-ubicacion', job.ubicacion);
       articule.setAttribute('data-nivel', job.data.nivel);

       articule.innerHTML = `
        <div>
            <h3>${job.titulo}</h3>
            <small>${job.empresa} - ${job.ubicacion}</small>
            <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job">Aplicar</button>
        `
         jobConteiner.appendChild(articule);
    });
});

