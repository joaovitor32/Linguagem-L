<h2>Problema</h2>
<p>Escopo da Linguagem L:

Dados primitivos: inteiros e booleanos
Operadores aritméticos, comparativos, lógicos usuais para formar expressões. Um operador especial (de atribuição), permite
armazenar o valor de uma expressão em 1 variável ou em 1 vetor, permitindo definir valores.
Estruturas de dados: parâmetro de função, variável e vetor.
Estrutura de fluxo: alternativa if()/or() e de repetição do()
Pode definir função de 2 tipos:
simples => definida apenas por meio de 1 expressão que retorne 1 valor.
sequencia => possui: definição de valores, estruturas de fluxo e chamadas a funções.
uma ultima expressao isolada permite retornar um valor.
Existem Funções pre-definidas que quando acionados geram os elmentos gráficos a serem desenhados. A base de trabalho é SVG do HTML5.</p>

Para implementar a linguagem, 4 grupos são suficientes.
  1) Grupo que implementa função simples
  2) Grupo que implementa função sequencia  
  3) Grupo que implementa função gráfica
  4) Grupo que testa e disponibiliza as informações em um site do Google sites.

I) Parte do interpretador da linguagem L:
Afeta Grupos 3 e 4

Fase1: interpretador de expressões

I.1) definição das expressões
numeros:
<numero> -> <inteiro> | <natural>
<inteiro> ->  0 | {-}[1-9]{[0-9]}
<natural> -> [1-9]{[0-9]}
booleanos:
<booleano> -> si (true) | no (false)
cadeias de caracteres:
<cadeia> -> "..." (... indica qualquer sequência de caracter sem efeito + \n => caracter de nova linha)
variaveis: inicia com letra minuscula,possui letras minúsculas(a-z), maíusculas(A-Z) e digitos(0-9).
operadores aritméticos: + (soma-infixo) - (subtração-infixo/troca de sinal-prefixo) * (multiplicação-infixo) / (divisão-infixo) % (resto da divisão-infixo) ^ (potência-infixo) ! (fatorial-posfixo)
operadores comparativos: < (menor que) > (maior que) = (igual a)
operadores lógicos: ~ (negação) & (e-lógico) @ (ou-lógico)
parenteses: ( ) usados para: expressões, argumentos de função, estruturas de fluxo
atribuição: :={ } As chaves são usadas para definir funções simples/sequência. (Observação: Podem ser dispensadas se usar do() com  1 argumento)
concatenação: . (para concatenar cadeias ou vetores)

I.2) precedência dos operadores:
precedência aritméticos:
() parênteses
!
- trocaSinal
^
*,/,%
+,- subtracao

precedência lógicos:
~
&,@

precedência geral:
aritméticos
comparativos
lógicos
concatenação
atribuição

Ex de entrada:
    
   <strong>mult(mult(2,3),soma(4,5))</strong>
  
<h3>How To Use</h3>

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher, installed on your computer. From your command line:
  
  ```bash
# Clone this repository
$ git https://github.com/joaovitor32/Linguagem-L

# Go into the repository
$ cd Linguagem-L

# Install dependencies
$ npm install

# Run the app
$ node index.js

```

<h3>To run tests</h3>

   ```bash

npm run test

```

