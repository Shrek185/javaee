/**
 * Confirmação de exclusão de um contato
 * @author Douglas Nascimento
 * @param idcon
 */

 function confirmar(idcon){
	 let resposta = confirm("Confima a exclusão deste contato ?")
	 if(resposta === true)
	 window.location.href = "delete?idcon=" + idcon
 }