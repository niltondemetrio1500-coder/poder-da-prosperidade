# Plano — Landing page VSL

## Escopo
Criar uma página única em português reproduzindo a referência fornecida: página branca, headline preta centralizada com “Arcanjo Miguel” e “Receber as Bênçãos de Deus” em vermelho, subtítulo preto em itálico e bloco de VSL vertical centralizado logo abaixo. O vídeo atual será tratado como placeholder substituível pelo arquivo VSL que o usuário enviará depois.

## Direção visual
- **Movimento:** direct-response VSL / editorial dramático de página de vendas mobile-first.
- **Princípios:** foco absoluto no player; contraste alto; urgência visual sem excesso de elementos; leitura em blocos curtos.
- **Paleta:** branco dominante como no print; preto para a headline e subtítulo; vermelho vivo para os dois destaques da headline; preto no bloco da VSL.
- **Layout:** coluna única centrada em uma página ampla, com headline e subtítulo fora do player e o vídeo vertical como eixo central logo abaixo.
- **Elementos assinatura:** headline em preto/vermelho, subtítulo em itálico e bloco de vídeo vertical com barra de progresso vermelha.
- **Interação:** o player é o primeiro ponto de ação; a barra acompanha o tempo real; o download é explícito e só usa o arquivo hospedado no projeto.
- **Animação:** nenhuma animação decorativa no primeiro viewport; o foco deve permanecer igual ao print e respeitar `prefers-reduced-motion`.
- **Tipografia:** Arial/Helvetica para impacto e compatibilidade; headline em peso forte, com os destaques vermelhos preservando a mesma hierarquia do print.
- **Essência da marca:** uma página de VSL direta, limpa e centralizada para conduzir o visitante da headline ao vídeo. Personalidade: objetiva, dramática, editorial.
- **Tom:** informativo e visual, preservando literalmente a headline e o subtítulo do print.
- **Wordmark/marca:** nenhum logotipo adicional; a própria headline funciona como assinatura visual.
- **Cor proprietária:** vermelho `#e3242b`, usado exclusivamente nas duas expressões destacadas da headline.

## Implementação
- Página estática com `index.html`, `styles.css`, `script.js` e `public/manus-routes.json`.
- Vídeo servido pelo armazenamento do projeto em `/manus-storage/vsl_27c88ec0.mp4`, como placeholder substituível.
- Player HTML5 vertical, responsivo, com controles nativos, poster, progresso sincronizado, botão de download e tratamento de erro.
- Nenhum checkout, rastreamento ou formulário será incluído sem instrução específica.
- O bloco de frase e botão abaixo da VSL foi removido; o rodapé apresenta links clicáveis para `politica-de-privacidade.html` e `termos-de-uso.html`, identificando a organização com os dados fornecidos pelo usuário.
