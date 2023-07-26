const body = document.querySelector('body')

function question (){
   const nanya = prompt('nama kamu siapa ?')
   if (nanya == 'andi'){
    alert('kamu berhasil masuk !!')
   } else {
    salah()
   }
}

function salah (){
   const salah =  prompt('kata sandi salah !')
   if ( salah == 'andi') {
    alert('kamu  berhasil masuk')
   } else {
    question ()
   }
}

question()

body.style.display = 'block'





