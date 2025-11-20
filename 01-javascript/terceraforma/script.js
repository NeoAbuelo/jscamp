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