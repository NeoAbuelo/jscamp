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
}).catch((error) => {
    console.error('Error al cargar los datos:', error);
});