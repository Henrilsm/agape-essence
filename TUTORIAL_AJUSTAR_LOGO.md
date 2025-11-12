# Tutorial: Manipular Zoom e Corte da Logo

## 📋 Entender os Valores

Existem 3 propriedades principais no CSS que controlam como a imagem é exibida:

### 1️⃣ **Container (logoContainer)**
```css
.logoContainer {
  width: 150px;           /* ← Largura do "quadro" */
  height: 60px;           /* ← Altura do "quadro" */
  overflow: hidden;       /* ← Corta tudo que sair do quadro */
  object-position: center; /* ← Onde centralizar a imagem */
}
```

### 2️⃣ **Imagem (logoImage)**
```css
.logoImage {
  width: 100%;            /* ← Preenche 100% da largura do container */
  height: 100%;           /* ← Preenche 100% da altura do container */
  object-fit: cover;      /* ← AQUI ACONTECE O ZOOM/CORTE */
  object-position: center; /* ← Posição do corte */
}
```

---

## 🎯 Propriedade: `object-fit`

O `object-fit` controla como a imagem se comporta dentro do container:

| Valor | O que faz | Resultado |
|-------|-----------|-----------|
| `cover` | **Zoom na imagem para preencher tudo** (pode cortar) | Imagem sempre preenche o container, bordas são cortadas |
| `contain` | **Encolhe a imagem para caber toda** (pode ter espaço) | Imagem toda visível, mas pode ter espaço em branco |
| `fill` | **Distorce a imagem** para preencher tudo | Imagem fica esticada/comprimida |
| `scale-down` | **Usa o menor entre contain e natural** | Imagem no tamanho natural se couber |

**Recomendado:** Use `cover` para cortar, `contain` para ver tudo.

---

## 🎨 Propriedade: `object-position`

Controla **para onde a câmera aponta** ao cortar a imagem:

| Valor | Posição |
|-------|---------|
| `center` | Centro da imagem (padrão) |
| `top` | Topo (corta mais na base) |
| `bottom` | Base (corta mais no topo) |
| `left` | Esquerda |
| `right` | Direita |
| `top left` | Canto superior esquerdo |
| `50% 30%` | Posição customizada (x%, y%) |

---

## 🛠️ Como Ajustar Manualmente

### **Cenário 1: Quer VER TODA A LOGO (sem cortes)**
Use `contain` em vez de `cover`:

```css
.logoImage {
  width: 100%;
  height: 100%;
  object-fit: contain;      /* ← MUDE PARA ISTO */
  object-position: center;
}
```

**Resultado:** A logo toda fica visível, pode ter espaço em branco ao redor.

---

### **Cenário 2: Quer MAIS ZOOM (corta mais das bordas)**
Use `cover` (já está assim), mas aumente o tamanho da imagem na tag `<Image>`:

Em `Header.js`:
```javascript
<Image
  src="/logo-sem-fundo.png"
  alt="Ágape Essence Logo"
  width={300}              /* ← AUMENTAR (era 200) */
  height={120}             /* ← AUMENTAR (era 80) */
  priority
  className={styles.logoImage}
/>
```

Com `object-fit: cover`, isso vai fazer mais zoom no conteúdo.

---

### **Cenário 3: Quer MENOS ZOOM (menos corte)**
Reduza o tamanho do container:

Em `Header.module.css`:
```css
.logoContainer {
  width: 200px;    /* ← AUMENTAR (era 150px) */
  height: 80px;    /* ← AUMENTAR (era 60px) */
  overflow: hidden;
  object-position: center;
}
```

---

### **Cenário 4: Quer CORTAR MAIS DO TOPO (menos dos lados)**
Use `object-position: bottom`:

```css
.logoImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;  /* ← Aponta para baixo, corta mais no topo */
}
```

Outros valores:
- `top` — corta mais na base
- `left` — corta mais do lado direito
- `right` — corta mais do lado esquerdo
- `top center` — corta mais na base, centra horizontalmente

---

## 📐 Exemplo Prático: Testando Valores

### **Teste 1: Ver toda a logo**
```css
.logoContainer {
  width: 200px;
  height: 100px;
  overflow: hidden;
}

.logoImage {
  width: 100%;
  height: 100%;
  object-fit: contain;        /* ← VER TUDO */
  object-position: center;
}
```

### **Teste 2: Fazer mais zoom (cortar mais)**
```css
.logoContainer {
  width: 120px;              /* ← MENOR = mais zoom */
  height: 50px;              /* ← MENOR = mais zoom */
  overflow: hidden;
}

.logoImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

### **Teste 3: Cortar mais do topo, menos dos lados**
```css
.logoImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom center; /* ← Aponta para baixo */
}
```

---

## 🎮 Passo a Passo para Ajustar

1. **Abra** `components/Header.module.css`

2. **Localize a seção:**
```css
.logoContainer {
  width: 150px;
  height: 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.logoImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

3. **Teste um dos cenários acima** (copie/cole o bloco de código)

4. **Salve** (Ctrl+S)

5. **Veja a mudança ao vivo** em http://localhost:3000 (refresh com F5 se não atualizar)

6. **Ajuste os valores** até ficar do seu gosto:
   - `width` / `height` do container: quanto menor = mais zoom
   - `object-fit`: `cover` = corta | `contain` = vê tudo
   - `object-position`: para onde aponta a câmera

---

## 🧪 Testes Rápidos

| Mudança | Comando | Efeito |
|---------|---------|--------|
| Mais zoom | Reduzir `width` e `height` do `.logoContainer` | Imagem maior, corta mais |
| Menos zoom | Aumentar `width` e `height` do `.logoContainer` | Imagem menor, corta menos |
| Ver tudo | `object-fit: contain` | Logo toda aparece |
| Cortar topo | `object-position: bottom center` | Corta mais no topo |
| Cortar base | `object-position: top center` | Corta mais na base |
| Cortar lado esq | `object-position: right center` | Corta mais à esquerda |
| Cortar lado dir | `object-position: left center` | Corta mais à direita |

---

## 📝 Valores Recomendados Pré-Prontos

### **Opção A: Logo bem legível, sem muitos cortes**
```css
.logoContainer {
  width: 180px;
  height: 70px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.logoImage {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
```

### **Opção B: Logo com zoom moderado (corta um pouco)**
```css
.logoContainer {
  width: 150px;
  height: 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.logoImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

### **Opção C: Logo bem focada no conteúdo (corta bastante)**
```css
.logoContainer {
  width: 120px;
  height: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.logoImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

### **Opção D: Apenas o conteúdo (máximo zoom)**
```css
.logoContainer {
  width: 100px;
  height: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.logoImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

---

## 🎓 Resumo Rápido

- **`overflow: hidden`** — Corta tudo que sai do container (obrigatório para crop)
- **`object-fit: cover`** — Faz zoom para preencher e corta as bordas
- **`object-fit: contain`** — Encolhe para caber toda, sem cortes
- **`object-position: center`** — Aponta para o centro (mude para `top`, `bottom`, `left`, `right`, etc.)
- **Reduzir largura/altura do container** = Mais zoom na imagem

---

## ❓ Dúvidas?

Se não souber qual valor usar, comece com a **Opção B** (já está aplicada) e teste as mudanças conforme aprenda o comportamento dos valores.

**Divirta-se ajustando!** 🎨
