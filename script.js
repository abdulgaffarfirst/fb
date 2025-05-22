const scriptURL = 'https://script.google.com/macros/s/AKfycbz0w7WwT61D09sn5tYranusrH7YtB4T7Z7cshrYd2o8rs7CFVH1NCNxujWsb_IoscY9/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})