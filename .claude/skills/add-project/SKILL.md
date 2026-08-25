---
description: Adiciona um novo card na secao Projetos do index.html, seguindo a mesma estrutura HTML e estilo visual ja existentes no site (cloud moderno).
argument-hint: [nome do projeto] [descricao breve] [link opcional]
---

## Card atual de referencia

!`grep -A 15 'class="project-card"' index.html | head -20`

Adicione um novo card na secao Projetos com base no argumento recebido, seguindo estas regras:

1. Use exatamente a mesma estrutura HTML/classes dos cards existentes (nao invente classes novas)
2. Se existir um card placeholder ("Em breve"), substitua ele pelo novo; senao, adicione ao final da lista
3. Titulo, descricao curta e link (se fornecido) vem do argumento
4. Nao adicione CSS novo — o card deve herdar o estilo ja existente
5. Nao mexa em nenhuma outra secao do site

Resultado esperado: me mostre o resultado no navegador antes de qualquer commit. Nao commite sozinho.
