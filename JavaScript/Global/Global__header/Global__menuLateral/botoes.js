document.addEventListener('DOMContentLoaded', function() {

    const checkbox = document.getElementById('alternar-esconder');
    const botoesCorpo = document.querySelector('.botoes__corpo');
    const botoesGarrafa = document.querySelector('.botoes__garrafa');

    checkbox.addEventListener('change', function() {

      if (this.checked) {

        botoesCorpo.classList.add('invisivel');
        botoesGarrafa.classList.add('invisivel');

      } else {

        botoesCorpo.classList.remove('invisivel');
        botoesGarrafa.classList.remove('invisivel');

      }
      
    });

  });

document.addEventListener('DOMContentLoaded', function () {

    const garrafa__botao = document.getElementById('garrafa__botao');
    const garrafasEsconder = document.querySelectorAll('.botoes__garrafa.esconder');
    const corpoEsconder = document.querySelectorAll('.botoes__corpo.esconder');

    const linhaEsconder = document.querySelectorAll('.corpo__linha.esconder');
    const linhaEsconder__02 = document.querySelectorAll('.corpo__linha__02.esconder');
    const linhaEsconder__03 = document.querySelectorAll('.corpo__linha__03.esconder');

    garrafa__botao.addEventListener('click', function () {

        garrafasEsconder.forEach(function(button) {

            button.classList.toggle('esconder');


        });

        corpoEsconder.forEach(function(button) {

            button.classList.toggle('esconder');

        });

        linhaEsconder.forEach(function(button) {

            button.classList.toggle('esconder');

        });

        linhaEsconder__02.forEach(function(button) {

            button.classList.toggle('esconder');

        });

        linhaEsconder__03.forEach(function(button) {

            button.classList.toggle('esconder');

        });

    });

});