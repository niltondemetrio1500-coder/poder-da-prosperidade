# Plano — Landing page VSL

## Escopo
Criar uma página única em português reproduzindo a referência fornecida: composição vertical de VSL em fundo preto, headline centralizada com destaque dourado e vermelho, player vertical centralizado, chamada para ação, barra de progresso visual e botão de download do vídeo. O vídeo atual será tratado como placeholder substituível pelo arquivo VSL que o usuário enviará depois.

## Direção visual
- **Movimento:** direct-response VSL / editorial dramático de página de vendas mobile-first.
- **Princípios:** foco absoluto no player; contraste alto; urgência visual sem excesso de elementos; leitura em blocos curtos.
- **Paleta:** preto quase absoluto para concentrar atenção no vídeo; branco para legibilidade; dourado para promessa/ênfase; vermelho para urgência; verde para a ação principal.
- **Layout:** coluna única estreita e vertical, com o player como eixo central e faixas tipográficas acima/abaixo; sem navegação ou distrações.
- **Elementos assinatura:** headline em duas cores, barra de progresso vermelha no topo do player e CTA verde com brilho discreto.
- **Interação:** o player é o primeiro ponto de ação; a barra acompanha o tempo real; o download é explícito e só usa o arquivo hospedado no projeto.
- **Animação:** entrada suave do conteúdo, pulso discreto na urgência e brilho curto no CTA; respeitar `prefers-reduced-motion`.
- **Tipografia:** Arial/Helvetica para impacto e compatibilidade; caixa alta na headline e CTA, com pesos fortes e tracking controlado.
- **Essência da marca:** uma experiência de VSL direta, intensa e mobile-first para conduzir atenção do alerta ao vídeo e ao próximo passo. Personalidade: urgente, dramática, objetiva.
- **Tom:** frases curtas, imperativas e visuais. Exemplos: “NÃO SAIA DESTA PÁGINA” e “ATIVE O PODER DE RECEBER”.
- **Wordmark/marca:** nenhum logotipo adicional; a própria headline funciona como assinatura visual.
- **Cor proprietária:** dourado quente `#c8a42b`, usado somente nos trechos de maior ênfase.

## Implementação
- Página estática com `index.html`, `styles.css`, `script.js` e `public/manus-routes.json`.
- Vídeo servido pelo armazenamento do projeto em `/manus-storage/vsl_27c88ec0.mp4`, como placeholder substituível.
- Player HTML5 vertical, responsivo, com controles nativos, poster, progresso sincronizado, botão de download e tratamento de erro.
- Nenhum checkout, rastreamento ou formulário será incluído sem instrução específica.
