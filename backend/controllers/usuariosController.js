const { getServicesUserId, getServicesAllUsers, serviceUpdateUser, serviceCreateUser, serviceDeleteUser, serviceUpdateUserEndereco, serviceUpdateUserTelefone, getServicesUsersName } = require("../services/usersServices");

async function getAllUsers(req, res) {

    const result = await getServicesAllUsers()
    if (!result) {
        res.json({ error: " não existe usuario cadastrado!" })
    } else {
        const data = {
            "resultados": result,
            "total": result.length
        }
        res.json(data);
    }


}

async function getAllUsersId(req, res) {
    const { id } = req.params;
    const result = await getServicesUserId(id);
    if (!result) {
        res.json({ error: " não existe usuario cadastrado com esse id!" })
    } else {
        const data = {
            "resultados": result,
            "total": result.length
        }
        res.json(data);
    }
}

async function getUsersName(req, res) {
    const { nome } = req.params;
    const result = await getServicesUsersName(nome);
    if (!result) {
        res.json({ error: " não existe usuario cadastrado com esse nome!" })
    } else {
        const data = {
            "resultados": result,
            "total": result.length
        }
        res.json(data);
    }
}


async function updateUser(req, res) {
    const { id } = req.params
    const data = req.body;
    const user = await getServicesUserId(id);

    if (!user) {
        res.json({ error: "este id não existe!" });
    } else {
        await serviceUpdateUser(data, id);
        res.json({ resposta: "alterado com sucesso!" });
    }
}

async function updateUserEndereco(req, res) {
    const { id } = req.params
    const data = req.body;
    const user = await getServicesUserId(id);

    if (!user) {
        res.json({ error: "este id não existe!" });
    } else {
        await serviceUpdateUserEndereco(data, id);
        res.json({ resposta: "alterado com sucesso!" });
    }
}
async function updateUserTelefone(req, res) {
    const { id } = req.params
    const data = req.body;
    const user = await getServicesUserId(id);

    if (!user) {
        res.json({ error: "este id não existe!" });
    } else {
        await serviceUpdateUserTelefone(data, id);
        res.json({ resposta: "alterado com sucesso!" });
    }
}
async function createUser(req, res) {
    const data = req.body;
    const { nomeUsuario, whatsap } = data;
    let campo = null

    switch (true) {

        case !nomeUsuario:
            campo = "nome do usuario"
            break;

        case !whatsap:
            campo = "whattsap"
            break;

        default:
            campo = null;
    }

    if (campo) {
        res.json({ resposta: ` Esta faltando o campo ${campo}! ` })
    }
    else {
        const result = await serviceCreateUser(data);
        if (!result) {
            res.status(400).json({ resposta: "falha ao cadastrar o usuario!" })
        } else {
            res.status(200).json({ resposta: "usuario cadastrado com sucesso!" });
        }
    }
}
async function deleteUser(req, res) {
    const { id } = req.params;
    const result = await serviceDeleteUser(parseInt(id));
    if (!result) {
        res.json({ resposta: "usuario não pode ser excluido, existe pedido para este usuario!" });
    } else {

        res.json({ resposta: "usuario excluido com sucesso!" })
    }

}

module.exports = { getAllUsers, getAllUsersId, updateUser, createUser, deleteUser, updateUserEndereco, updateUserTelefone, getUsersName }