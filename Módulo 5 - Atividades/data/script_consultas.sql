--*CONSULTAS

-- 1) Listagem do cardápio ordenada por nome
SELECT 
    id AS codigo,
    nome_cafe,
    descricao,
    preco
FROM cardapio
ORDER BY nome_cafe;


-- 2) Comandas e seus itens (detalhado com preço total de cada item)
SELECT 
    c.id AS codigo_comanda,
    c.data,
    c.nr_mesa,
    c.nm_cliente,
    ca.nome_cafe,
    ca.descricao,
    i.qtd,
    ca.preco AS preco_unitario,
    (i.qtd * ca.preco) AS preco_total_item
FROM comanda c
JOIN itens i ON i.id_comanda = c.id
JOIN cardapio ca ON ca.id = i.id_cardapio
ORDER BY c.data, c.id, ca.nome_cafe;


-- 3) Listagem das comandas com valor total da comanda
SELECT 
    c.id AS codigo_comanda,
    c.data,
    c.nr_mesa,
    c.nm_cliente,
    SUM(i.qtd * ca.preco) AS valor_total_comanda
FROM comanda c
JOIN itens i ON i.id_comanda = c.id
JOIN cardapio ca ON ca.id = i.id_cardapio
GROUP BY c.id, c.data, c.nr_mesa, c.nm_cliente
ORDER BY c.data;


-- 4) Comandas com mais de um tipo de café
SELECT 
    c.id AS codigo_comanda,
    c.data,
    c.nr_mesa,
    c.nm_cliente,
    SUM(i.qtd * ca.preco) AS valor_total_comanda
FROM comanda c
JOIN itens i ON i.id_comanda = c.id
JOIN cardapio ca ON ca.id = i.id_cardapio
GROUP BY c.id, c.data, c.nr_mesa, c.nm_cliente
HAVING COUNT(i.id_cardapio) > 1
ORDER BY c.data;


-- 5) Total de faturamento por data
SELECT 
    DATE(c.data) AS data_venda,
    SUM(i.qtd * ca.preco) AS total_faturamento
FROM comanda c
JOIN itens i ON i.id_comanda = c.id
JOIN cardapio ca ON ca.id = i.id_cardapio
GROUP BY DATE(c.data)
ORDER BY DATE(c.data);