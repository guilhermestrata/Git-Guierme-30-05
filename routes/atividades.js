module.exports = (app)=>{
    app.post('/atividades', async(req, res)=>{
        var dados = req.body
        const database = require("../config/database")
        const atividades = require("../models/atividades")
        var gravar = await new atividades({
            data:dados.data,
            tipo:dados.entrega,
            entrega:dados.entrega,
            disciplina:dados.disciplina,
            instrucoes:dados.orientacoes,
            usuario:dados.id
        }).save()
        //reload page
        res.render('atividades.ejs',{nome:dados.nome,id:dados.id})
    })
}