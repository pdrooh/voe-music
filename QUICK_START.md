# 🚀 Início Rápido - VOE MUSIC

## Instalação e Execução

1. **Instalar dependências** (já feito):
   ```bash
   npm install
   ```

2. **Executar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Acessar no navegador**:
   - Abra [http://localhost:3000](http://localhost:3000)

## 📝 Personalização Rápida

### 1. Adicionar Membros da Banda
Edite `app/page.tsx`, seção "Banda":
```tsx
<BandMember name="Nome Real" role="Vocal" delay={0} />
```

### 2. Adicionar Lançamentos
Edite `app/page.tsx`, seção "Lançamentos":
```tsx
<ReleaseCard
  title="Nome da Música"
  artist="VOE MUSIC"
  youtubeUrl="https://www.youtube.com/watch?v=..."
  spotifyUrl="https://open.spotify.com/track/..." // opcional
  delay={0}
/>
```

### 3. Adicionar Produtos
Edite `app/page.tsx`, seção "Loja":
```tsx
<ProductCard
  name="Nome do Produto"
  price="R$ 79,90"
  available={true}
  whatsappLink="https://wa.me/5514999999999?text=..."
  delay={0}
/>
```

### 4. Configurar WhatsApp
Substitua `5514999999999` pelo número real em:
- `components/Footer.tsx`
- `app/page.tsx` (seções Loja, Agenda, Contato)

### 5. Links das Redes Sociais
Já configurados:
- Instagram: https://www.instagram.com/voemusic.oficial/
- YouTube: https://www.youtube.com/@VoeMusic.oficial

## 🎨 Estilo Visual

- **Cores**: Preto, branco e cinzas (esquema monocromático)
- **Fontes**: Bebas Neue (títulos), Oswald (subtítulos), Poppins (texto)
- **Animações**: Framer Motion com transições suaves

## 🚢 Deploy

1. Faça push para GitHub
2. Conecte na Vercel
3. Deploy automático!

---

**Pronto para tocar! 🎵**

