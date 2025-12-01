# Ágape Essence

Site institucional da clínica de estética Ágape Essence, desenvolvido com Next.js e CSS Modules.

## 🌟 Características

- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Carrossel Interativo**: Slides dinâmicos na página inicial
- **Busca Inteligente**: Sistema de pesquisa por serviços e páginas
- **Interface Moderna**: Design clean com animações suaves
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🛠 Tecnologias

- **Framework**: Next.js 14
- **Styling**: CSS Modules + CSS Variables
- **Fonts**: Google Fonts (Montserrat + Playfair Display)
- **Icons**: React Icons
- **Deploy**: Vercel

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

## 📱 Responsividade

- **Mobile**: até 480px
- **Tablet**: 481px - 768px
- **Desktop Pequeno**: 769px - 1024px
- **Desktop Grande**: 1025px+

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

## 🚀 Instalação e Uso

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Henrilsm/agape-essence.git
   cd agape-essence
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📝 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 🎯 SEO e Performance

- Meta tags otimizadas
- Open Graph configurado
- Imagens com lazy loading
- CSS otimizado com modules
- Fontes carregadas de forma eficiente

## 📞 Contato

- **Localização**: Rio Mar Trade Center
- **WhatsApp**: Botão flutuante integrado
- **Redes Sociais**: Links no footer

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
- Luís Felipe

## 📄 Licença

Este projeto é propriedade da Ágape Essence. Todos os direitos reservados.

---

Desenvolvido com ❤️ para Ágape Essence