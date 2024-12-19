const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

// Configurações básicas
app.use(cors());
app.use(express.json());

// Rota para receber dados do Bubble e enviar para Wix
app.post('/webhook', async (req, res) => {
    try {
        const { texto } = req.body;
        
        // Log para debug
        console.log('Texto recebido:', texto);
        
        // Aqui você implementará a chamada para o Wix
        // const respostaWix = await axios.post('SUA_URL_WIX', { texto });
        
        res.json({
            success: true,
            message: 'Dados recebidos com sucesso'
        });
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
