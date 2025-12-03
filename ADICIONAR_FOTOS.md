# 📸 Adicionar Fotos com Efeito Parallax

## Onde adicionar as fotos:

Adicione as fotos dos shows na pasta `public/` com estes nomes:

1. **`show-1.jpg`** - Primeira foto do show (usada na seção Lançamentos)
2. **`show-2.jpg`** - Segunda foto do show (usada na seção Banda)

## Como adicionar:

1. Coloque as fotos na pasta: `/Users/pdrooh/Documents/Voe Music/public/`
2. Renomeie para:
   - `show-1.jpg` (primeira foto)
   - `show-2.jpg` (segunda foto)

## Onde as fotos aparecem:

- **show-1.jpg**: Seção "Lançamentos" - efeito parallax de fundo
- **show-2.jpg**: Seção "Banda" - efeito parallax de fundo

## Efeito Parallax:

- As fotos se movem mais devagar que o scroll, criando profundidade
- Em mobile, o efeito é desabilitado para melhor performance
- Overlay escuro garante legibilidade do texto sobre as fotos

## Personalização:

Se quiser ajustar a opacidade ou velocidade do parallax, edite em `app/page.tsx`:

```tsx
<ParallaxScrollBackground
  imageUrl="/show-1.jpg"
  opacity={0.4}  // Ajuste de 0.1 a 1.0
  speed={0.3}    // Ajuste de 0.1 a 1.0 (maior = mais movimento)
/>
```

---

**Após adicionar as fotos, recarregue a página para ver o efeito!** ✨

