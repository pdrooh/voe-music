#!/bin/bash

# Script para criar repositório no GitHub e fazer deploy
# VOE MUSIC - Deploy Automation

echo "🚀 Iniciando deploy do VOE MUSIC..."

# Verificar se o GitHub CLI está instalado
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI encontrado!"
    
    # Verificar se está autenticado
    if gh auth status &> /dev/null; then
        echo "✅ Autenticado no GitHub"
        
        # Criar repositório
        echo "📦 Criando repositório no GitHub..."
        gh repo create voe-music --public --source=. --remote=origin --push
        
        if [ $? -eq 0 ]; then
            echo "✅ Repositório criado e código enviado!"
            echo ""
            echo "🎉 Próximo passo:"
            echo "1. Acesse https://vercel.com"
            echo "2. Faça login com GitHub"
            echo "3. Clique em 'Add New Project'"
            echo "4. Selecione o repositório 'voe-music'"
            echo "5. Clique em 'Deploy'"
            echo ""
            echo "✨ Seu site estará no ar em alguns minutos!"
        else
            echo "❌ Erro ao criar repositório"
            exit 1
        fi
    else
        echo "⚠️  Não autenticado no GitHub CLI"
        echo "Execute: gh auth login"
        exit 1
    fi
else
    echo "⚠️  GitHub CLI não encontrado"
    echo ""
    echo "Opção 1: Instalar GitHub CLI"
    echo "  brew install gh"
    echo "  gh auth login"
    echo ""
    echo "Opção 2: Criar manualmente"
    echo "1. Acesse https://github.com/new"
    echo "2. Nome: voe-music"
    echo "3. Público"
    echo "4. NÃO marque 'Initialize with README'"
    echo "5. Clique em 'Create repository'"
    echo "6. Execute os comandos que aparecerem"
    echo ""
    echo "Ou execute manualmente:"
    echo "  git remote add origin https://github.com/SEU_USUARIO/voe-music.git"
    echo "  git push -u origin main"
fi

