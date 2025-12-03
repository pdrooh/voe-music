#!/bin/bash

# Script para fazer push usando o token fornecido
# VOE MUSIC

echo "🚀 Preparando push para GitHub..."
echo ""

# Token deve ser fornecido como variável de ambiente
# Use: export GITHUB_TOKEN="seu_token" antes de executar o script
if [ -z "$GITHUB_TOKEN" ]; then
    echo "⚠️  GITHUB_TOKEN não encontrado como variável de ambiente"
    echo "   Use: export GITHUB_TOKEN='seu_token' antes de executar"
    exit 1
fi

# Verificar se já tem remote
if git remote get-url origin &>/dev/null; then
    CURRENT_URL=$(git remote get-url origin)
    echo "✅ Remote já configurado: $CURRENT_URL"
    echo ""
    read -p "Deseja usar este remote? (s/n): " USE_EXISTING
    if [ "$USE_EXISTING" != "s" ] && [ "$USE_EXISTING" != "S" ]; then
        git remote remove origin
    else
        # Usar o remote existente
        git push -u origin main
        exit 0
    fi
fi

# Se não tem remote, pedir username
echo "📋 Preciso do seu username do GitHub"
echo "   Exemplo: se sua URL é https://github.com/pdrooh/voe-music"
echo "   Seu username é: pdrooh"
echo ""
read -p "Seu username do GitHub: " GITHUB_USER

if [ -z "$GITHUB_USER" ]; then
    echo "❌ Username não fornecido. Saindo..."
    exit 1
fi

# Adicionar remote com token
REPO_URL="https://${GITHUB_TOKEN}@github.com/${GITHUB_USER}/voe-music.git"
git remote add origin "$REPO_URL"

echo ""
echo "✅ Remote configurado!"
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
    echo "🔗 URL: https://voe-music.vercel.app"
else
    echo ""
    echo "❌ Erro ao fazer push"
    echo ""
    echo "💡 Verifique:"
    echo "- Se o repositório 'voe-music' já existe no GitHub"
    echo "- Se o username está correto"
    echo "- Se o token ainda é válido"
    echo ""
    echo "📝 Para criar o repositório manualmente:"
    echo "1. Acesse: https://github.com/new"
    echo "2. Nome: voe-music"
    echo "3. Público"
    echo "4. NÃO marque nenhuma opção"
    echo "5. Clique em 'Create repository'"
    echo "6. Execute este script novamente"
fi
