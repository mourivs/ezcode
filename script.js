const container = document.querySelector('.container');/// Seleciona o container principal
const Input = document.querySelector('.form input');/// Seleciona o campo de input
const btn = container.querySelector('.form button');/// Seleciona o botão dentro do container
const Img = container.querySelector('.qr-code img');/// Seleciona a imagem do QR code

btn.addEventListener('click', () => {/// Adiciona um evento de clique ao botão
    let qrValue = Input.value;/// Obtém o valor do input
    if (!qrValue) return;/// Se o input estiver vazio, sai da função
    btn.innerText = "Gerando QR Code..."; // Fase 1

    Img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;/// Define a fonte da imagem do QR code
    Img.addEventListener('load', () => {/// Adiciona um evento de carregamento à imagem
        container.classList.add("active");/// Adiciona a classe "active" ao container
        btn.innerText = "Concluído"; // Fase 2
    }, { once: true }); // Garante que só executa uma vez
});

Input.addEventListener('keyup', () => {/// Adiciona um evento de tecla ao input
    if (!Input.value) {/// Se o input estiver vazio
        container.classList.remove("active");/// Remove a classe "active" do container
        btn.innerText = "Gerar QR Code"; // Volta ao texto inicial
    }
});

/// Share Button 
function share(){///    Função para compartilhar
	if (navigator.share !== undefined) {/// Verifica se o navegador suporta a API de compartilhamento
		navigator.share({/// Chama a função de compartilhamento
			title: 'O título da sua página',/// Título da página
			text: 'Um texto de resumo',/// Texto de resumo
			url: 'https://mourivs.github.io/ezcode/',/// URL da página
		})
		.then(() => console.log('Successful share'))/// Se o compartilhamento for bem-sucedido
		.catch((error) => console.log('Error sharing', error));/// Se houver um erro ao compartilhar
	}
}
/// Download Button
const downloadBtn = document.getElementById('download-btn');/// Seleciona o botão de download

btn.addEventListener('click', () => {/// Adiciona um evento de clique ao botão
    let qrValue = Input.value;//// Obtém o valor do input
    if (!qrValue) return;/// Se o input estiver vazio, sai da função
    btn.innerText = "Gerando QR Code...";///    Fase 1

    Img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;/// Define a fonte da imagem do QR code
    Img.addEventListener('load', () => {/// Adiciona um evento de carregamento à imagem
        container.classList.add("active");///   Adiciona a classe "active" ao container
        btn.innerText = "Concluído";/// Fase 2
        downloadBtn.href = Img.src;/// Define o href do botão de download como a fonte da imagem do QR code
        downloadBtn.style.display = "inline-block";/// Mostra o botão de download
    }, { once: true });/// Garante que só executa uma vez
});/// Fim do Download Button

Input.addEventListener('keyup', () => { /// Adiciona um evento de tecla ao input
    if (!Input.value) {/// Se o input estiver vazio
        container.classList.remove("active");/// Remove a classe "active" do container
        btn.innerText = "Gerar QR Code";/// Volta ao texto inicial/
        downloadBtn.style.display = "none";/// Esconde o botão de download
        
    }
});


