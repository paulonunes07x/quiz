

 function iniciarQuiz() {
     const perguntas = [
        { pergunta: 'Qual é o maior time do Brasil ?', opcoes: ['Porcada', 'Flamengo', 'Sao Paulo', 'Vasco'], respostaCorreta: 2 },
        { pergunta: 'Qual é o maior planeta do sistema solar ?', opcoes: ['Terra', 'Júpiter', 'Saturno', 'Marte'], respostaCorreta: 1 },
        { pergunta: 'Quem é o maior goleiro do mundo ?', opcoes: ['Rogerio Ceni', 'Keylor Navas', 'Ederson', 'Gregor Kobe'], respostaCorreta: 0 }
        ];
         let quizHTML = '';

     perguntas.forEach((pergunta, index) => {
         quizHTML += `<h3>${pergunta.pergunta}</h3>`;
         pergunta.opcoes.forEach((opcao, opcaoIndex) => {
         quizHTML += `<label><input type="radio" name="pergunta${index}" value="${opcaoIndex}"> ${opcao}</label><br>`;
         });
         });

         quizHTML += '<button onclick="calcularPontuacao()">Enviar Respostas</button>';
         document.getElementById('quiz-container').innerHTML = quizHTML;
    }

function calcularPontuacao() {
     const perguntas = [
     { respostaCorreta: 2 },
     { respostaCorreta: 1 },
     { respostaCorreta: 0 }
     ];
     let pontuacao = 0;
     perguntas.forEach((pergunta, index) => {
         const radios = document.getElementsByName(`pergunta${index}`);
         radios.forEach(radio => {
         if (radio.checked && parseInt(radio.value) === pergunta.respostaCorreta) {
              pontuacao++;
              }
             });
         });
     document.getElementById('result').innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
    }

window.onload = iniciarQuiz;
