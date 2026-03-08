# 📸 Guía de Imágenes del Menú

## 📂 Carpetas para tus imágenes

Coloca tus imágenes en estas carpetas **YA CREADAS**:

```
public/assets/images/menu/
├── cachimbas/    ← Pon aquí las imágenes de cachimbas
├── cocteles/     ← Pon aquí las imágenes de cocteles  
└── comida/       ← Pon aquí las imágenes de comida
```

## 📋 Nombres de Archivo Exactos

### 🪔 Cachimbas (9 imágenes) - Carpeta: `cachimbas/`

Formato: **Cuadrado 800x800px**

1. `aeon-edition.webp` o `.jpg` o `.png`
2. `khalil-mamoon.webp`
3. `steamulation.webp`
4. `moze.webp`
5. `oblako.webp`
6. `maklaud.webp`
7. `wookah.webp`
8. `japona.webp`
9. `klassicheskiy.webp`

### 🍹 Cocteles (10 imágenes) - Carpeta: `cocteles/`

Formato: **Landscape 1280x720px (16:9)**

1. `mojito.webp` o `.jpg` o `.png`
2. `cosmopolitan.webp`
3. `gin-tonic.webp`
4. `margarita.webp`
5. `pina-colada.webp`
6. `goat-special.webp`
7. `old-fashioned.webp`
8. `aperol-spritz.webp`
9. `negroni.webp`
10. `espresso-martini.webp`

### 🍽️ Comida (10 imágenes) - Carpeta: `comida/`

Formato: **Landscape 1280x720px (16:9)**

1. `hummus.webp` o `.jpg` o `.png`
2. `cheese-board.webp`
3. `olives.webp`
4. `fries.webp`
5. `nachos.webp`
6. `wings.webp`
7. `baba-ganoush.webp`
8. `mixed-nuts.webp`
9. `bruschetta.webp`
10. `arabic-bread.webp`

## 🔧 Después de añadir las imágenes

1. **Actualiza** `menu-data.mock.ts` cambiando `undefined` por el nombre del archivo:

```typescript
// Ejemplo - ANTES:
new MenuItemLegacy(
  'h1',
  MenuCategory.Cachimbas,
  'pages.menu.cachimbas.items.aeonEdition.name',
  45,
  Currency.EUR,
  'pages.menu.cachimbas.items.aeonEdition.description',
  undefined,  // ← Cambiar esto
  Badge.Signature,
  ...
)

// DESPUÉS:
new MenuItemLegacy(
  'h1',
  MenuCategory.Cachimbas,
  'pages.menu.cachimbas.items.aeonEdition.name',
  45,
  Currency.EUR,
  'pages.menu.cachimbas.items.aeonEdition.description',
  'aeon-edition.webp',  // ← Nombre del archivo
  Badge.Signature,
  ...
)
```

## 💡 Formatos Aceptados

- ✅ `.webp` (recomendado - mejor calidad/tamaño)
- ✅ `.jpg` / `.jpeg`
- ✅ `.png`

## 📐 Especificaciones Técnicas

### Cachimbas
- **Tamaño**: 800x800px (cuadrado)
- **Aspect Ratio**: 1:1
- **Peso recomendado**: < 200KB

### Cocteles y Comida
- **Tamaño**: 1280x720px (landscape)
- **Aspect Ratio**: 16:9
- **Peso recomendado**: < 300KB

## ⚠️ Importante

- Los nombres de archivo deben ser **exactamente** como se listan arriba
- Usa minúsculas y guiones (`-`), no espacios ni mayúsculas
- Si no hay imagen, se mostrará un emoji como placeholder (💨 o 🍹)

---

**¿Necesitas ayuda?** Consulta [IMAGES_NEEDED.md](./IMAGES_NEEDED.md) para más detalles.
