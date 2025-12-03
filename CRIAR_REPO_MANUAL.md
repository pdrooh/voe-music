# 🚀 Criar Repositório Manualmente - VOE MUSIC

## Método Mais Simples (Sem Autenticação CLI):

### Passo 1: Criar Repositório no GitHub

1. **Acesse:** https://github.com/new
2. **Nome do repositório:** `voe-music`
3. **Descrição (opcional):** "Site oficial do VOE MUSIC - Ministério de Louvor da Igreja VOE"
4. **Visibilidade:** Público ✅
5. **⚠️ IMPORTANTE:** NÃO marque "Add a README file"
6. **⚠️ IMPORTANTE:** NÃO marque "Add .gitignore"
7. **⚠️ IMPORTANTE:** NÃO marque "Choose a license"
8. **Clique em:** "Create repository"

### Passo 2: Copiar a URL do Repositório

Após criar, você verá uma página com instruções. **Copie a URL** que aparece, será algo como:
```
https://github.com/SEU_USUARIO/voe-music.git
```

### Passo 3: Conectar e Fazer Push

Execute estes comandos no terminal (substitua SEU_USUARIO pelo seu username do GitHub):

```bash
cd "/Users/pdrooh/Documents/Voe Music"
git remote add origin https://github.com/SEU_USUARIO/voe-music.git
git branch -M main
git push -u origin main
```

**Se pedir usuário e senha:**
- Username: seu username do GitHub
- Password: use um **Personal Access Token** (não sua senha normal)

---

## 🔑 Como Criar Personal Access Token (se pedir senha):

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token" > "Generate new token (classic)"
3. Dê um nome: "VOE Music Deploy"
4. Marque a opção: **repo** (todas as permissões de repositório)
5. Clique em "Generate token"
6. **COPIE O TOKEN** (você só verá uma vez!)
7. Use esse token como senha quando o Git pedir

---

## ✅ Depois do Push - Deploy na Vercel:

1. Acesse: https://vercel.com
2. Faça login com GitHub
3. Clique em "Add New Project"
4. Selecione o repositório `voe-music`
5. Clique em "Deploy"

**Pronto!** 🎉

