# VOE MUSIC - Site Oficial

Site oficial do **VOE MUSIC**, ministério de louvor da Igreja VOE.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animações)
- **Shadcn/UI** (componentes)
- **Lucide React** (ícones)

## 📦 Instalação

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000)

## 🎨 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial (Home)
│   └── globals.css         # Estilos globais
├── components/
│   ├── Navbar.tsx          # Navegação
│   ├── Footer.tsx          # Rodapé
│   ├── Loader.tsx          # Loader inicial
│   ├── BandMember.tsx      # Card de membro da banda
│   ├── ReleaseCard.tsx     # Card de lançamento
│   ├── ProductCard.tsx     # Card de produto
│   └── ui/
│       └── button.tsx      # Componente Button
└── lib/
    └── utils.ts            # Utilitários
```

## 📝 Seções do Site

- **Home** - Hero section com chamada principal
- **Banda** - Membros da banda
- **Lançamentos** - Músicas e álbuns
- **Loja** - Camisetas e produtos
- **Agenda** - Formulário para agendar shows
- **Contato** - Links para redes sociais e WhatsApp

## 🔧 Personalização

### Adicionar Membros da Banda
Edite `app/page.tsx` na seção "Banda" e atualize os componentes `BandMember` com nomes e funções reais.

### Adicionar Lançamentos
Na seção "Lançamentos", atualize os componentes `ReleaseCard` com:
- Título da música
- Artista
- URL do YouTube
- URL do Spotify (opcional)
- Imagem da capa (opcional)

### Adicionar Produtos
Na seção "Loja", atualize os componentes `ProductCard` com:
- Nome do produto
- Preço
- Disponibilidade
- Link do WhatsApp para compra

### Configurar WhatsApp
Substitua `5514999999999` pelo número real do WhatsApp em:
- Links do Footer
- Links dos produtos
- Link da seção Agenda
- Link da seção Contato

## 🚢 Deploy

### Vercel (Recomendado)
1. Faça push do código para o GitHub
2. Conecte seu repositório na [Vercel](https://vercel.com)
3. Deploy automático!

---

**VOE MUSIC** — Mais que músicas, são orações. ✨

