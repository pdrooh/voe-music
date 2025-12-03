# 🚀 Guia de Deploy - VOE MUSIC

## Opção 1: Deploy na Vercel (Recomendado - Gratuito)

A Vercel é a plataforma oficial do Next.js e oferece deploy gratuito com:
- ✅ Deploy automático
- ✅ HTTPS gratuito
- ✅ CDN global
- ✅ Domínio personalizado
- ✅ Preview de PRs

### Passo a Passo:

#### 1. Preparar o Repositório Git

```bash
# Inicializar Git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - VOE MUSIC site"
```

#### 2. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Nome: `voe-music` (ou o nome que preferir)
4. Deixe como **público** ou **privado** (sua escolha)
5. **NÃO** marque "Initialize with README"
6. Clique em "Create repository"

#### 3. Conectar ao GitHub

```bash
# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/voe-music.git

# Enviar o código
git branch -M main
git push -u origin main
```

#### 4. Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up" e faça login com sua conta GitHub
3. Clique em "Add New Project"
4. Selecione o repositório `voe-music`
5. A Vercel detectará automaticamente que é um projeto Next.js
6. **Configurações:**
   - Framework Preset: Next.js (já detectado)
   - Root Directory: `./` (padrão)
   - Build Command: `npm run build` (já configurado)
   - Output Directory: `.next` (já configurado)
7. Clique em "Deploy"

#### 5. Aguardar o Deploy

- O build levará cerca de 2-3 minutos
- Você verá o progresso em tempo real
- Ao finalizar, receberá uma URL: `https://voe-music.vercel.app`

#### 6. Configurar Domínio Personalizado (Opcional)

1. No dashboard da Vercel, vá em "Settings" > "Domains"
2. Adicione seu domínio (ex: `voemusic.com.br`)
3. Siga as instruções para configurar o DNS

---

## Opção 2: Deploy Manual (Build Local)

Se preferir fazer o build localmente primeiro:

```bash
# Instalar dependências (se ainda não instalou)
npm install

# Fazer o build
npm run build

# Testar localmente
npm start
```

O build criará uma pasta `.next` com os arquivos otimizados.

---

## ⚠️ Importante Antes do Deploy

### Verificar se a foto da banda está na pasta public:

Certifique-se de que o arquivo `/public/banda.jpg` existe. Se não existir:
1. Adicione a foto da banda na pasta `public/`
2. Nomeie como `banda.jpg`

### Variáveis de Ambiente (se necessário):

Se no futuro precisar de variáveis de ambiente:
1. Na Vercel: Settings > Environment Variables
2. Adicione as variáveis necessárias

---

## 📝 Checklist Pré-Deploy

- [ ] Foto da banda em `/public/banda.jpg`
- [ ] Código commitado no Git
- [ ] Repositório criado no GitHub
- [ ] Código enviado para o GitHub
- [ ] Conta criada na Vercel
- [ ] Projeto conectado na Vercel

---

## 🎉 Após o Deploy

Seu site estará disponível em:
- URL da Vercel: `https://voe-music.vercel.app` (ou similar)
- Domínio personalizado (se configurado)

**Próximos passos:**
- Compartilhar o link do site
- Adicionar nas redes sociais
- Monitorar analytics (se configurado)

---

## 🆘 Problemas Comuns

### Build falha
- Verifique se todas as dependências estão no `package.json`
- Verifique se não há erros de TypeScript: `npm run lint`

### Imagens não aparecem
- Verifique se as URLs das imagens do YouTube estão corretas
- Verifique se a foto da banda está em `/public/banda.jpg`

### Erro 404
- Verifique se o arquivo `next.config.mjs` está configurado corretamente

---

**Boa sorte com o deploy! 🚀**

