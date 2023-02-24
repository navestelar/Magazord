var cpf = document.querySelector("#cpf")

cpf.addEventListener("blur", function () {
  if (cpf.value)
    cpf.value = cpf.value
      .match(/.{1,3}/g)
      .join(".")
      .replace(/\.(?=[^.]*$)/, "-")
})

  function SubForm() {
    $.ajax({
      url: "https://api.apispreadsheets.com/data/641/",
      type: "post",
      data: $("#myForm").serializeArray(),
      success: function () {
        alert("Form Data Submitted :)")
      },
      error: function () {
        alert("There was an error :(")
      },
    })
  }
  		function atualizaRelogio(){ 
			var momentoAtual = new Date();
			
			var vhora = momentoAtual.getHours();
			var vminuto = momentoAtual.getMinutes();
			var vsegundo = momentoAtual.getSeconds();
			
			var vdia = momentoAtual.getDate();
			var vmes = momentoAtual.getMonth() + 1;
			var vano = momentoAtual.getFullYear();
			
			if (vdia < 10){ vdia = "0" + vdia;}
			if (vmes < 10){ vmes = "0" + vmes;}
			if (vhora < 10){ vhora = "0" + vhora;}
			if (vminuto < 10){ vminuto = "0" + vminuto;}
			if (vsegundo < 10){ vsegundo = "0" + vsegundo;}

			dataFormat = vdia + " / " + vmes + " / " + vano;
			horaFormat = vhora + " : " + vminuto + " : " + vsegundo;

			document.getElementsByTagName("data").innerHTML = dataFormat;
			document.getElementsByTagName("hora").innerHTML = horaFormat;

			setTimeout("atualizaRelogio()",1000);
      }