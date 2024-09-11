const multer = require("multer")
const { getServiceAllProdutos, getServiceProdutoId, serviceCreateProduto, serviceUpdateProduto, serviceDeleteProduto, getServiceProdutoCodBarra,getServiceProdutoNome } = require("../services/produtosServices");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("url")

async function getAllProdutos(req, res) {
  const result = await getServiceAllProdutos()
  const data = {
    "resultados": result.map((element) => ({
      id: element.idProduto,
      nome: element.nomeProduto,
      estoqueMinimo: element.estoqueMinimo,
      preco: element.preco,
      precoAtacado: element.precoAtacado,
      quantidadeAtacado: element.quantidadeAtacado,
      codigoBarra: element.codigoBarra,
      escaninho: element.escaninho,
      idTipo: element.idTipo,
      image: element.url ? element.url.toString('base64') : null

    })),
    "total": result.length
  }
  res.json(data);
}


async function getProdutoId(req, res) {
  const { id } = req.params;
  const result = await getServiceProdutoId(id)
  const data = {
    "resultados": result,
    "total": result.length
  }
  res.json(data);
}

async function getProdutoCodBarra(req, res) {
  const { codBarra } = req.params;
  const result = await getServiceProdutoCodBarra(codBarra);
  const data = {
    "resultados": result,
    "total": result.length
  }

  res.json(data);
}

async function getProdutoNome(req, res) {
  const  {nome}  = req.params;
  const result = await getServiceProdutoNome(nome);
  const data = {
    "resultados": result,
    "total": result.length
  }
  res.json(data);
}

async function createProduto(req, res) {

  upload(req, res, async (err) => {
    if (err) {
      return res.send("error")
    }
    const { nomeProduto, estoqueMinimo, preco, precoAtacado, quantidadeAtacado, codigoBarra, escaninho, idTipo } = req.body;
    console.log(req.file)
    campo = null;

    switch (true) {

      case !nomeProduto:
        campo = "nome do produto"
        break;
      case !estoqueMinimo:
        campo = "estoque minimo"
        break;
      case !preco:
        campo = "preço"
        break;
      case !precoAtacado:
        campo = "preço de atacado"
        break;
      case !quantidadeAtacado:
        campo = "quantidade de atacado"
        break;
      case !codigoBarra:
        campo = "código de barra"
        break;
      case !escaninho:
        campo = "escaninho"
        break;
      case !idTipo:
        campo = "id do tipo"
        break;
      case !req.file:
        campo = "imagem"
        break
      default:
        campo = null;

    }
    if (campo) {
      res.json({ resposta: ` Esta faltando o campo ${campo}! ` })
    } else {
      const result = await serviceCreateProduto(nomeProduto, estoqueMinimo, preco, precoAtacado, quantidadeAtacado, codigoBarra, escaninho, idTipo, req.file);
      if (!result) {
        res.status(400).json({ resposta: "falha ao cadastrar o produto!" })
      } else {
        res.status(200).json({ resposta: "produto cadastrado com sucesso!" });
      }
    }
  });

}

async function updateProduto(req, res) {
  const { id } = req.params;
  const data = req.body;
  const result = await getServiceProdutoId(id);

  if (result.length === 0) {
    res.json({ error: "este id não existe!" });
  } else {
    await serviceUpdateProduto(id, data);
    res.json({ resposta: "alterado com sucesso!" });
  }

}

async function deleteProduto(req, res) {
  const { id } = req.params;
  const result = await serviceDeleteProduto(parseInt(id));
  if (!result) {
    res.json({ resposta: "produto não pode ser excluido, existe pedido para este produto!" });
  } else {

    res.json({ resposta: "produto excluido com sucesso!" })
  }

}

module.exports = { getAllProdutos, getProdutoId, createProduto, updateProduto, deleteProduto, getProdutoCodBarra,  getProdutoNome }

