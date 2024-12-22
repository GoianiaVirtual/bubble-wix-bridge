const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Rota de teste
app.get('/', (req, res) => {
    res.json({ status: 'Servidor Bridge Bubble-Wix está rodando!' });
});

// Rota para receber dados do Bubble
app.post('/forward-to-wix', async (req, res) => {
    try {
        const { text } = req.body;
        
        if (!text) {
            return res.status(400).json({
                success: false,
                message: 'O texto é obrigatório'
            });
        }

        console.log('Texto recebido do Bubble:', {
            preview: text.substring(0, 100) + '...'
        });

        // Por enquanto apenas retorna sucesso
        res.json({
            success: true,
            message: 'Texto recebido com sucesso'
        });

    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({
            success: false,
            message: 'Erro interno do servidor',
            error: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});