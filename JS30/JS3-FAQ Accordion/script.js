const item = document.querySelectorAll(".accordion a")
function toggleAccordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}
item.forEach(item => item.addEventListener('click',toggleAccordion));