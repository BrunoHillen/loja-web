CREATE SCHEMA `loja` ;

CREATE TABLE `loja`.`tiposproduto` (
  `idTipo` INT AUTO_INCREMENT,
  `nomeTipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTipo`));


CREATE TABLE `loja`.`produtos` (
  `idProduto` INT AUTO_INCREMENT,
  `nomeProduto` VARCHAR(45) NOT NULL,
  `estoqueMinimo` INT NOT NULL,
  `preco` DOUBLE NOT NULL,
  `precoAtacado` DOUBLE NOT NULL,
  `quantidadeAtacado` INT NULL,
  `comissao` INT NULL,
  `codigoBarra` VARCHAR(45) NULL,
  `escaninho` INT NULL,
  `idTipo` INT NULL,
  PRIMARY KEY (`idProduto`),
  INDEX `idTipoProduto_idx` (`idTipo` ASC) VISIBLE,
  CONSTRAINT `idTipoProduto`
    FOREIGN KEY (`idTipo`)
    REFERENCES `loja`.`tiposproduto` (`idTipo`)
    ON DELETE RESTRICT
    ON UPDATE NO ACTION);

    CREATE TABLE `loja`.`usuarios` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nomeUsuario` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(45) NULL,
  `bairro` VARCHAR(45) NULL,
  `cidade` VARCHAR(45) NULL,
  `telefone` VARCHAR(45) NULL,
  `whatsap` VARCHAR(45) NULL,
  `celular` VARCHAR(45) NULL,
  `contato` VARCHAR(45) NULL,
  `email`  VARCHAR(45) NULL,
  `cpf` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  PRIMARY KEY (`idUsuario`));

  CREATE TABLE `loja`.`pedido` (
  `idPedido` INT NOT NULL AUTO_INCREMENT,
  `dataPedido` DATE NOT NULL,
  `horaPedido` TIME NOT NULL,
  `operacao` VARCHAR(45) NOT NULL,
  `notaFiscal` VARCHAR(45) NULL,
  `idUsuarioFK` INT NOT NULL,
  PRIMARY KEY (`idPedido`),
  INDEX `idUsuario_idx` (`idUsuarioFK` ASC) VISIBLE,
  CONSTRAINT `idUsuario`
    FOREIGN KEY (`idUsuarioFK`)
    REFERENCES `loja`.`usuarios` (`idUsuario`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE);

    CREATE TABLE `loja`.`formapagamento` (
  `idformaPagamento` int NOT NULL AUTO_INCREMENT,
  `nomePagamento` varchar(45) NOT NULL,
  PRIMARY KEY (`idformaPagamento`)
);

CREATE TABLE `loja`.`pagamentos` (
  `idPagamentos` int NOT NULL AUTO_INCREMENT,
  `dataVencimento` date NOT NULL,
  `dataPagamento` date DEFAULT NULL,
  `valorParcela` double DEFAULT NULL,
  `valorPago` double DEFAULT NULL,
  `idPedidoFK` int NOT NULL,
  `idFormaPagamentoFK` int NOT NULL,
  PRIMARY KEY (`idPagamentos`),
  KEY `idPeido_idx` (`idPedidoFK`),
  KEY `idFomePagamento_idx` (`idFormaPagamentoFK`),
  CONSTRAINT `idFomePagamento` FOREIGN KEY (`idFormaPagamentoFK`) REFERENCES `formapagamento` (`idformaPagamento`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `idPedido` FOREIGN KEY (`idPedidoFK`) REFERENCES `pedido` (`idPedido`) ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE TABLE `loja`.`itens` (
  `idItens` int NOT NULL AUTO_INCREMENT,
  `quantidadeVenda` int DEFAULT NULL,
  `quantidadeCompra` int DEFAULT NULL,
  `preco` double NOT NULL,
  `custoMedio` double DEFAULT NULL,
  `idProdutoFK` int NOT NULL,
  `idPedidoFK` int NOT NULL,
  PRIMARY KEY (`idItens`),
  KEY `idPedidoItens_idx` (`idPedidoFK`),
  KEY `idProduto_idx` (`idProdutoFK`),
  CONSTRAINT `idPedidoItens` FOREIGN KEY (`idPedidoFK`) REFERENCES `pedido` (`idPedido`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `idProduto` FOREIGN KEY (`idProdutoFK`) REFERENCES `produtos` (`idProduto`) ON DELETE RESTRICT ON UPDATE CASCADE
);