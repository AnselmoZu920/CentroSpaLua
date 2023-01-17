window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
});

const $form = document.querySelector('#form')
const $buttonMalito = document.querySelector('#trucazo')
$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMalito.setAttribute('href', `mailto:anselmozu90@gmail.com?subject=${form.get('name')} ${form.get('mail')} ${form.get('number')}&body=${form.get('mensaje')}`)
    $buttonMalito.click()
}
