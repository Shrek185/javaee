/**
 * Validaçao de formulário
 * @author Douglas Nascimento
 */

 function validar(){
	 let nome = frmContato.nome.value
	 let fone = frmContato.fone.value
	 if(nome === ""){
		 alert('Preenha o campo Nome')
		 frmContato.nome.focus()
		 return false
	 } else if(fone === ""){
		 alert('Preenha o campo Fone')
		 frmContato.fone.focus()
		 return false
		 }else{
			 document.forms["frmContato"].submit()
		 }
}