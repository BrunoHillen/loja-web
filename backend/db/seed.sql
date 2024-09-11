 -- Inserir tipos de produtos
INSERT INTO `loja`.`tiposproduto` (`nomeTipo`) VALUES
  ('Eletrônicos'),
  ('Roupas'),
  ('Alimentos'),
  ('Livros'),
  ('Brinquedos');

-- Inserir produtos associados aos tipos
INSERT INTO `loja`.`produtos` (`nomeProduto`, `estoqueMinimo`, `preco`, `precoAtacado`, `quantidadeAtacado`, `codigoBarra`, `escaninho`, `idTipo`, `url`) VALUES
  ('Smartphone XYZ', 10, 1500.00, 1400.00, 5, '123456789012', 1, 1, NULL),
  ('Camiseta Preta', 20, 50.00, 45.00, 10, '987654321098', 2, 2, NULL),
  ('Arroz Integral', 30, 10.00, 9.00, 20, '111222333444', 3, 3, NULL),
  ('Harry Potter e a Pedra Filosofal', 5, 35.00, 30.00, 3, '555666777888', 4, 4, NULL),
  ('Lego Creator', 15, 100.00, 90.00, 8, '999000111222', 5, 5, NULL);

-- Inserir usuários
INSERT INTO `loja`.`usuarios` (`nomeUsuario`, `endereco`, `bairro`, `cidade`, `telefone`, `whatsap`, `celular`, `contato`, `email`, `senha`, `cpf`) VALUES
  ('João Silva', 'Rua A, 123', 'Centro', 'São Paulo', '(11) 1234-5678', '(11) 98765-4321', NULL, 'João', 'joao@email.com', 'senha123', '123.456.789-00'),
  ('Maria Souza', 'Av. B, 456', 'Vila Madalena', 'Rio de Janeiro', '(21) 9876-5432', '(21) 1234-5678', NULL, 'Maria', 'maria@email.com', 'senha456', '987.654.321-00'),
  ('Pedro Oliveira', 'Rua C, 789', 'Copacabana', 'Rio de Janeiro', '(21) 8765-4321', '(21) 8765-4321', NULL, 'Pedro', 'pedro@email.com', 'senha789', '456.789.123-00'),
  ('Ana Santos', 'Av. D, 101', 'Barra da Tijuca', 'Rio de Janeiro', '(21) 2345-6789', '(21) 2345-6789', NULL, 'Ana', 'ana@email.com', 'senhaABC', '789.123.456-00'),
  ('Luiz Pereira', 'Rua E, 111', 'Centro', 'São Paulo', '(11) 3456-7890', '(11) 5432-1098', NULL, 'Luiz', 'luiz@email.com', 'senhaDEF', '321.654.987-00');

-- Inserir pedidos
INSERT INTO `loja`.`pedido` (`dataPedido`, `horaPedido`, `operacao`, `notaFiscal`, `idUsuarioFK`) VALUES
  ('2024-06-01', '14:30:00', 'Venda', '123456', 1),
  ('2024-06-02', '10:15:00', 'Compra', '789012', 2),
  ('2024-06-03', '16:00:00', 'Venda', '345678', 3),
  ('2024-06-04', '09:45:00', 'Venda', '901234', 4),
  ('2024-06-05', '11:20:00', 'Compra', '567890', 5);

-- Inserir itens
INSERT INTO `loja`.`itens` (`quantidadeVenda`, `quantidadeCompra`, `preco`, `custoMedio`, `idProdutoFK`, `idPedidoFK`) VALUES
  (2, NULL, 300.00, NULL, 1, 1),
  (NULL, 5, 150.00, 120.00, 2, 2),
  (3, NULL, 30.00, NULL, 3, 3),
  (1, NULL, 35.00, NULL, 4, 4),
  (NULL, 2, 80.00, 70.00, 5, 5);

-- Inserir formas de pagamento
INSERT INTO `loja`.`formapagamento` (`nomePagamento`) VALUES
  ('Cartão de Crédito'),
  ('Boleto Bancário'),
  ('Transferência Bancária'),
  ('Dinheiro'),
  ('PIX');

-- Inserir pagamentos
INSERT INTO `loja`.`pagamentos` (`dataVencimento`, `dataPagamento`, `valorParcela`, `valorPago`, `idPedidoFK`, `idFormaPagamentoFK`) VALUES
  ('2024-06-10', '2024-06-09', 500.00, 500.00, 1, 1),
  ('2024-06-15', NULL, 250.00, NULL, 2, 2),
  ('2024-06-20', '2024-06-18', 100.00, 100.00, 3, 3),
  ('2024-06-25', '2024-06-25', 70.00, 70.00, 4, 4),
  ('2024-06-30', NULL, 160.00, NULL, 5, 5);
