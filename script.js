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