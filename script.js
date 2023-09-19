const scriptURL = 'https://script.google.com/macros/s/AKfycbwJCE_uxwHs44uYpFu-tiClec-yjxtt_XH162XqLwbzPjYaSW_HrWLUKK4n23bnNSPv/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="sent successfully";
        setTimeout(function(){
            msg.innerHTML="";
            form.reset();
        },2000);
      })
      
      .catch(error => console.error('Error!', error.message))
      
  })