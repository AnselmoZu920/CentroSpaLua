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
    console.log(form.get('name'))
    $buttonMalito.setAttribute('href', `mailto:anselmozu90@gmail.com?subjetc=${form.get('name')} ${form.get('mail')} ${form.get('number')}&body=${form.get('mensaje')}`)
    $buttonMalito.click()
}
