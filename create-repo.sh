#!/bin/bash

# Script para criar repositório no GitHub via API
# VOE MUSIC

REPO_NAME="voe-music"
GITHUB_USER=$(git config user.name 2>/dev/null || echo "")

echo "🚀 Criando repositório no GitHub..."

# Verificar se tem token do GitHub
if [ -z "$GITHUB_TOKEN" ]; then
    echo ""
    echo "⚠️  Token do GitHub não encontrado"
    echo ""
    echo "Para criar o repositório automaticamente:"
    echo "1. Acesse: https://github.com/settings/tokens"
    echo "2. Clique em 'Generate new token (classic)'"
    echo "3. Dê um nome (ex: 'VOE Music Deploy')"
    echo "4. Marque 'repo' (todos os sub-itens)"
    echo "5. Clique em 'Generate token'"
    echo "6. Copie o token"
    echo "7. Execute: export GITHUB_TOKEN=seu_token_aqui"
    echo "8. Execute este script novamente"
    echo ""
    echo "Ou crie manualmente:"
    echo "1. Acesse https://github.com/new"
    echo "2. Nome: $REPO_NAME"
    echo "3. Público"
    echo "4. NÃO marque 'Initialize with README'"
    echo "5. Clique em 'Create repository'"
    echo "6. Execute:"
    echo "   git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git"
    echo "   git push -u origin main"
    exit 1
fi

# Tentar obter o username do GitHub
if [ -z "$GITHUB_USER" ]; then
    GITHUB_USER=$(curl -s -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/user | grep -o '"login":"[^"]*' | cut -d'"' -f4)
fi

if [ -z "$GITHUB_USER" ]; then
    echo "❌ Não foi possível obter o username do GitHub"
    echo "Por favor, forneça manualmente:"
    read -p "Seu username do GitHub: " GITHUB_USER
fi

echo "📦 Criando repositório: $GITHUB_USER/$REPO_NAME"

# Criar repositório via API
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d "{\"name\":\"$REPO_NAME\",\"description\":\"Site oficial do VOE MUSIC - Ministério de Louvor da Igreja VOE\",\"private\":false}")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$REPONSE" | sed '$d')

if [ "$HTTP_CODE" = "201" ]; then
    echo "✅ Repositório criado com sucesso!"
    
    # Adicionar remote e fazer push
    echo "📤 Enviando código..."
    git remote remove origin 2>/dev/null
    git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 Sucesso! Código enviado para GitHub!"
        echo ""
        echo "🌐 Próximo passo - Deploy na Vercel:"
        echo "1. Acesse: https://vercel.com"
        echo "2. Faça login com GitHub"
        echo "3. Clique em 'Add New Project'"
        echo "4. Selecione: $GITHUB_USER/$REPO_NAME"
        echo "5. Clique em 'Deploy'"
        echo ""
        echo "✨ Seu site estará no ar em alguns minutos!"
        echo "🔗 URL: https://$REPO_NAME.vercel.app"
    else
        echo "❌ Erro ao fazer push"
        exit 1
    fi
else
    echo "❌ Erro ao criar repositório (HTTP $HTTP_CODE)"
    echo "$BODY"
    exit 1
fi

