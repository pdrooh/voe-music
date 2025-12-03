#!/bin/bash

# Script para fazer push após criar repositório manualmente
# VOE MUSIC

echo "🚀 Preparando push para GitHub..."
echo ""

# Verificar se já tem remote
if git remote get-url origin &>/dev/null; then
    echo "✅ Remote 'origin' já configurado:"
    git remote get-url origin
    echo ""
    read -p "Deseja usar este remote? (s/n): " USE_EXISTING
    if [ "$USE_EXISTING" != "s" ] && [ "$USE_EXISTING" != "S" ]; then
        git remote remove origin
    fi
fi

# Se não tem remote, pedir URL
if ! git remote get-url origin &>/dev/null; then
    echo "📋 Cole a URL do seu repositório GitHub"
    echo "   Exemplo: https://github.com/SEU_USUARIO/voe-music.git"
    echo ""
    read -p "URL do repositório: " REPO_URL
    
    if [ -z "$REPO_URL" ]; then
        echo "❌ URL não fornecida. Saindo..."
        exit 1
    fi
    
    git remote add origin "$REPO_URL"
    echo "✅ Remote adicionado!"
fi

# Fazer push
echo ""
echo "📤 Enviando código para GitHub..."
echo ""

git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Sucesso! Código enviado para GitHub!"
    echo ""
    echo "🌐 Próximo passo - Deploy na Vercel:"
    echo "1. Acesse: https://vercel.com"
    echo "2. Faça login com GitHub"
    echo "3. Clique em 'Add New Project'"
    echo "4. Selecione o repositório 'voe-music'"
    echo "5. Clique em 'Deploy'"
    echo ""
    echo "✨ Seu site estará no ar em alguns minutos!"
else
    echo ""
    echo "❌ Erro ao fazer push"
    echo ""
    echo "💡 Dicas:"
    echo "- Verifique se a URL está correta"
    echo "- Se pedir senha, use um Personal Access Token"
    echo "- Crie o token em: https://github.com/settings/tokens"
    echo "- Marque a opção 'repo' ao criar o token"
fi

