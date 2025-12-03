# 📸 Como Adicionar Fotos das Camisetas

## Passo a Passo:

1. **Coloque as 4 fotos das camisetas na pasta `public`** com os seguintes nomes:
   - `camiseta-1.jpg` (ou `.png`, `.JPG`, `.PNG`)
   - `camiseta-2.jpg`
   - `camiseta-3.jpg`
   - `camiseta-4.jpg`

2. **Localização da pasta:**
   ```
   /Users/pdrooh/Documents/Voe Music/public/
   ```

3. **Formatos aceitos:**
   - `.jpg` / `.jpeg`
   - `.png`
   - `.JPG` / `.PNG` (maiúsculas também funcionam)

4. **Dica:** 
   - Use fotos quadradas (1:1) para melhor visualização
   - Tamanho recomendado: 800x800px ou maior
   - As fotos aparecerão automaticamente no site após salvá-las na pasta `public`

## Estrutura Final:
```
public/
  ├── banda.jpg
  ├── show-1.JPG
  ├── show-2.JPG
  ├── camiseta-1.jpg  ← Adicione aqui
  ├── camiseta-2.jpg  ← Adicione aqui
  ├── camiseta-3.jpg  ← Adicione aqui
  └── camiseta-4.jpg  ← Adicione aqui
```

## Após adicionar as fotos:
- O servidor Next.js detecta automaticamente as novas imagens
- Recarregue a página no navegador (F5 ou Cmd+R)
- As fotos aparecerão nos cards das camisetas!

