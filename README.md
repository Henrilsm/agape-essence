# Ágape Essence

Site institucional da clínica de estética Ágape Essence, desenvolvido com Next.js e CSS Modules.

## 📁 Estrutura do Projeto

```
agape-essence/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globais
│   ├── layout.js          # Layout principal
│   ├── page.js           # Página inicial
│   ├── servicos/         # Página de serviços
│   ├── sobre-nos/        # Página sobre nós
│   └── local/           # Página de localização
├── components/           # Componentes reutilizáveis
│   ├── Header.js        # Cabeçalho
│   ├── Footer.js        # Rodapé
│   ├── SearchOverlay.js # Overlay de busca
│   └── WhatsappButton.js # Botão WhatsApp
└── public/              # Assets estáticos
    ├── servicos/        # Imagens dos serviços
    └── *.jpg           # Imagens do carrossel
```

## 🛠 Tecnologias

- **Framework**: Next.js 14
- **Styling**: CSS Modules + CSS Variables
- **Fonts**: Google Fonts (Montserrat + Playfair Display)
- **Icons**: React Icons
- **Deploy**: Vercel

## 🎨 Design System

### Cores
- **Primária**: `#A5845A` (Dourado)
- **Secundária**: `#C4A6A1` (Rosa suave)
- **Neutra**: `#BCA88D` (Bege)
- **Background**: `#F6F6F6` (Cinza claro)
- **Texto**: `#4B3F3A` (Marrom escuro)

### Tipografia
- **Títulos**: Playfair Display (serif)
- **Corpo**: Montserrat (sans-serif)

## 🔍 Funcionalidades

### Página Inicial
- Carrossel com 3 slides interativos
- Indicadores clicáveis
- Transições suaves entre slides
- Layout adaptativo para mobile

### Busca
- Pesquisa em tempo real
- Busca por nome, descrição e tags
- Resultados com preview
- Interface modal responsiva

### Serviços
- Grid responsivo de cards
- Filtro por categorias
- Imagens otimizadas
- Links para páginas individuais

## 🔧 Desenvolvimento

### Estrutura de CSS
- CSS Modules para componentes
- Variáveis CSS para tema
- Media queries mobile-first
- Comentários padronizados

### Componentes
- Header com navegação responsiva
- Footer com redes sociais
- Botão WhatsApp fixo
- Modal de busca com overlay

## 👥 Contribuintes

- Gabriel Vera Cruz
- Guilherme Serretti
- Henri Leonardo
- Igor Leal

## 📄 Licença

Este projeto é propriedade da Ágape Essence. Todos os direitos reservados.

---