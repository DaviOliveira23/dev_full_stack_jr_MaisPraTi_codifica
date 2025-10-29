--*INSERTS

-- CARDÁPIO
INSERT INTO cardapio (nome_cafe, descricao, preco) VALUES
('Café Expresso', 'Café puro e forte, feito sob pressão', 6.50),
('Cappuccino', 'Mistura cremosa de café, leite e espuma', 9.00),
('Mocha', 'Café com chocolate e leite vaporizado', 10.50),
('Macchiato', 'Café expresso com pequena quantidade de leite', 7.00),
('Latte', 'Café com leite vaporizado e espuma leve', 8.50);

-- COMANDAS
INSERT INTO comanda (data, nr_mesa, nm_cliente) VALUES
('2025-10-27 09:15:00', 3, 'Ana Souza'),
('2025-10-27 10:05:00', 5, 'Bruno Lima'),
('2025-10-27 11:20:00', 2, 'Carla Mendes');

-- ITENS DAS COMANDAS
INSERT INTO itens (id_comanda, id_cardapio, qtd) VALUES
(1, 1, 2),
(1, 2, 1);

INSERT INTO itens (id_comanda, id_cardapio, qtd) VALUES
(2, 3, 1),
(2, 5, 2);

INSERT INTO itens (id_comanda, id_cardapio, qtd) VALUES
(3, 4, 1),
(3, 1, 1);
