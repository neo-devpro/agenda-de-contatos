const formularioContato = document.getElementById('formulario-contato');
        const listaContatos = document.getElementById('lista-contatos');

        formularioContato.addEventListener('submit', function(e) {
            e.preventDefault();

            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;

            const newRow = listaContatos.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            
            cell1.textContent = nome;
            cell2.textContent = telefone;


            document.getElementById('nome').value = '';
            document.getElementById('telefone').value = '';



        });