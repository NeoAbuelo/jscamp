const search = document.querySelector('#empleos-search-input');

search.addEventListener('input', function(event) {
    const jobs = document.querySelectorAll('.job-listing-card');
    const searchTerm = event.target.value.toLowerCase();
    jobs.forEach(function(job) {
        const titulo = job.querySelector('h3').textContent.toLowerCase();
        const empresa = job.querySelector('small').textContent.toLowerCase();
        const descripcion = job.querySelector('p').textContent.toLowerCase();
        const nivel = job.getAttribute('data-nivel').toLowerCase();
        const isShow = titulo.includes(searchTerm) || empresa.includes(searchTerm) || descripcion.includes(searchTerm) || nivel.includes(searchTerm);
        job.classList.toggle('is-hidden', !isShow);
    });
});