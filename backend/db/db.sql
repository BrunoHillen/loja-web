CREATE SCHEMA `loja`;

CREATE TABLE
  `loja`.`tiposproduto` (
    `idTipo` INT AUTO_INCREMENT,
    `nomeTipo` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`idTipo`)
  );

CREATE TABLE 
`loja`.`produtos` (
  `idProduto` int NOT NULL AUTO_INCREMENT,
  `nomeProduto` varchar(45) NOT NULL,
  `estoqueMinimo` int NOT NULL,
  `preco` double NOT NULL,
  `precoAtacado` double NOT NULL,
  `quantidadeAtacado` int DEFAULT NULL,
  `codigoBarra` varchar(45) DEFAULT NULL,
  `escaninho` int DEFAULT NULL,
  `idTipo` int DEFAULT NULL,
  `url`  mediumblob,
  PRIMARY KEY (`idProduto`),
  KEY `idTipoProduto_idx` (`idTipo`),
  CONSTRAINT `idTipoProduto` FOREIGN KEY (`idTipo`) REFERENCES `tiposproduto` (`idTipo`) ON DELETE RESTRICT
);

CREATE TABLE
  `loja`.`usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nomeUsuario` varchar(45) NOT NULL,
  `endereco` varchar(45) DEFAULT NULL,
  `bairro` varchar(45) DEFAULT NULL,
  `cidade` varchar(45) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `whatsap` varchar(45) NOT NULL,
  `celular` varchar(45) DEFAULT NULL,
  `contato` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  `cpf` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
 );

CREATE TABLE
  `loja`.`pedido` (
    `idPedido` INT NOT NULL AUTO_INCREMENT,
    `dataPedido` DATE  DEFAULT NULL,
    `horaPedido` TIME DEFAULT NULL,
    `operacao` VARCHAR(45) NOT NULL,
    `notaFiscal` VARCHAR(45) NULL,
    `idUsuarioFK` INT NOT NULL,
    PRIMARY KEY (`idPedido`),
    INDEX `idUsuario_idx` (`idUsuarioFK` ASC) VISIBLE,
    CONSTRAINT `idUsuario` FOREIGN KEY (`idUsuarioFK`) REFERENCES `loja`.`usuarios` (`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE
  );

DELIMITER $$
USE `loja`$$
CREATE DEFINER = CURRENT_USER TRIGGER `loja`.`data_hora_automatico` BEFORE INSERT ON `pedido` FOR EACH ROW
  BEGIN
    SET NEW.dataPedido = current_date;
    SET NEW.horaPedido = CURRENT_TIME;
  END$$
DELIMITER ;

CREATE TABLE
  `loja`.`formapagamento` (
    `idformaPagamento` int NOT NULL AUTO_INCREMENT,
    `nomePagamento` varchar(45) NOT NULL,
    PRIMARY KEY (`idformaPagamento`)
  );

CREATE TABLE
  `loja`.`pagamentos` (
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

CREATE TABLE
  `loja`.`itens` (
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