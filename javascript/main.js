//DELETAR
function deletarLinha(botao) {
    const row = botao.parentNode.parentNode;
    row.style.display = 'none';
}

//API
function fetchApi() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('api-result');
            resultDiv.innerHTML = `<h2>${data.title}</h2>
                                   <p>${data.body}</p>
                                   <p>Aqui estamos utilizando uma API externa para implementar o site.</p>`;
        })
        .catch(error => {
            console.error('Error fetching API:', error);
        });
}

//DIVS
function showDiv1() {
    document.getElementById('div1').style.display = 'block';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
}

function showDiv2() {
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'block';
    document.getElementById('div3').style.display = 'none';
}

function showDiv3() {
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'block';
}
