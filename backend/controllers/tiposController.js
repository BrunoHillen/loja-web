const { getAllServices, getTipoIdServices, serviceCreateTipo, serviceUpdateTipo, serviceDeleteTipo } = require("../services/tiposServices");
        
async function getAlltiposproduto(req, res) {
    const result = await getAllServices();
    const data = {
        "resultados": result,
        "total": result.length
    }
    res.json(data);
}
async function getTipoId(req, res) {
    const { id } = req.params;
    const result = await getTipoIdServices(id);
    const data = {
        "resultados": result,
        "total": result.length
    }
    res.json(data);
 }
    async function createTipo(req, res){
     const data = req.body;
     const {nomeTipo} = data;
     if (!nomeTipo) {
        res.json({resposta:"tipo não pode ser cadastrado com informações em branco!"})
     }else{
     const result = await serviceCreateTipo(data);
     res.json({ resposta: "tipo cadastrado com sucesso!" });
     }
    
}

async function updateTipo(req, res){
    const { id } = req.params;
    const  data  = req.body;
    const result = await serviceUpdateTipo(data,id);
    res.json({resposta: "tipo atualizado com sucesso!"});
}

async function deleteTipo(req, res){
    const { id } = req.params;
    const result = await serviceDeleteTipo(parseInt(id));
    if (!result) {
        res.json({resposta: "tipo não pode ser excluido"});
    } else {

        res.json({resposta: "tipo excluido com sucesso"});
    }

    
    
}

module.exports = { getAlltiposproduto, getTipoId, createTipo, updateTipo, deleteTipo}