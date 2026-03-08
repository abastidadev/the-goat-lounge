# 📸 Lista de Imágenes Necesarias

Todas las imágenes están actualmente en `undefined`. Necesitas añadir tus propias imágenes.

## 🪔 Cachimbas (9 imágenes)

**Carpeta:** `public/assets/images/menu/cachimbas/`  
**Formato:** Cuadrado (800x800px)  
**Peso:** < 200KB por imagen

| ID | Nombre Archivo | Producto | Descripción |
|---|---|---|---|
| h1 | `aeon-edition.webp` | The GOAT Edition | Edición exclusiva con cerámica turca premium |
| h2 | `khalil-mamoon.webp` | Khalil Mamoon | Cachimba egipcia clásica hecha a mano |
| h3 | `steamulation.webp` | Steamulation Pro X | Ingeniería alemana de precisión, V2A superior |
| h4 | `moze.webp` | Moze Breeze Two | Diseño alemán, rendimiento excepcional |
| h5 | `oblako.webp` | Oblako Phunnel M | Cabezal de cerámica ruso, distribución perfecta |
| h6 | `maklaud.webp` | Maklaud Steamulation | Cachimba turca moderna con tecnología avanzada |
| h7 | `wookah.webp` | Wookah Classic Walnut | Artesanía polaca en nogal noble |
| h8 | `japona.webp` | Japona Hookah Mira | Elegancia italiana con cerámica artesanal |
| h9 | `klassicheskiy.webp` | Klassicheskiy Russian | Diseño soviético tradicional, latón auténtico |

## 🍹 Cocteles (10 imágenes)

**Carpeta:** `public/assets/images/menu/cocteles/`  
**Formato:** Landscape (1280x720px, 16:9)  
**Peso:** < 300KB por imagen

| ID | Nombre Archivo | Cóctel | Ingredientes |
|---|---|---|---|
| c1 | `mojito.webp` | Mojito Clásico | Ron blanco, menta, lima, azúcar |
| c2 | `cosmopolitan.webp` | Cosmopolitan | Vodka Citron, triple sec, arándano |
| c3 | `gin-tonic.webp` | Gin & Tonic Premium | Hendrick's, tónica premium, pepino |
| c4 | `margarita.webp` | Margarita | Tequila, triple sec, lima, sal |
| c5 | `pina-colada.webp` | Piña Colada | Ron blanco, crema coco, piña |
| c6 | `goat-special.webp` | GOAT Special | Receta secreta, frutos rojos |
| c7 | `old-fashioned.webp` | Old Fashioned | Bourbon, bitter, azúcar, naranja |
| c8 | `aperol-spritz.webp` | Aperol Spritz | Aperol, Prosecco, soda, naranja |
| c9 | `negroni.webp` | Negroni | Gin, Campari, vermut rojo |
| c10 | `espresso-martini.webp` | Espresso Martini | Vodka, licor café, espresso |

## 🍽️ Comida (10 imágenes)

**Carpeta:** `public/assets/images/menu/comida/`  
**Formato:** Landscape (1280x720px, 16:9)  
**Peso:** < 300KB por imagen

| ID | Nombre Archivo | Plato | Detalles |
|---|---|---|---|
| f1 | `hummus.webp` | Hummus Clásico | Con aceite de oliva y pimentón |
| f2 | `cheese-board.webp` | Tabla de Quesos | Selección de quesos artesanales |
| f3 | `olives.webp` | Aceitunas Mixtas | Variedad mediterránea marinada |
| f4 | `fries.webp` | Patatas Fritas | Crujientes con sal marina |
| f5 | `nachos.webp` | Nachos con Queso | Jalapeños, pico de gallo, guacamole |
| f6 | `wings.webp` | Alitas de Pollo | Salsa BBQ o picante |
| f7 | `baba-ganoush.webp` | Baba Ganoush | Paté de berenjena ahumado |
| f8 | `mixed-nuts.webp` | Frutos Secos | Mezcla tostada y especiada |
| f9 | `bruschetta.webp` | Bruschetta | Tomate, albahaca, aceite |
| f10 | `arabic-bread.webp` | Pan Árabe | Con aceite de oliva y za'atar |

## 📝 Instrucciones Paso a Paso

### 1️⃣ Preparar las imágenes
- Descarga o crea tus fotos
- Usa los nombres exactos de la columna "Nombre Archivo"
- Optimiza con [TinyPNG](https://tinypng.com) o [Squoosh](https://squoosh.app)

### 2️⃣ Copiar a las carpetas
```bash
# Ejemplo Windows PowerShell
Copy-Item "C:\Mis-Fotos\cachimbas\*.webp" -Destination "public\assets\images\menu\cachimbas\"
Copy-Item "C:\Mis-Fotos\cocteles\*.webp" -Destination "public\assets\images\menu\cocteles\"
Copy-Item "C:\Mis-Fotos\comida\*.webp" -Destination "public\assets\images\menu\comida\"
```

### 3️⃣ Actualizar menu-data.mock.ts

Abre `src/app/pages/menu/domain/menu-data.mock.ts` y cambia cada `undefined` por el nombre del archivo:

```typescript
// Cachimbas - líneas 9-99
new MenuItemLegacy(
  'h1',
  MenuCategory.Cachimbas,
  'pages.menu.cachimbas.items.aeonEdition.name',
  45,
  Currency.EUR,
  'pages.menu.cachimbas.items.aeonEdition.description',
  'aeon-edition.webp',  // ← Cambiar aquí
  Badge.Signature,
  'Turkey',
  'Premium Ceramic'
),

// Cocteles - líneas 361-501
new MenuItemLegacy(
  'c1',
  MenuCategory.Cocteles,
  'pages.menu.cocteles.items.mojito.name',
  8,
  Currency.EUR,
  'pages.menu.cocteles.items.mojito.description',
  'mojito.webp',  // ← Cambiar aquí
  Badge.Popular,
  CoctelStrength.Light,
  ['Ron', 'Menta', 'Lima']
),

// Comida - líneas 503-643
new MenuItemLegacy(
  'f1',
  MenuCategory.Comida,
  'pages.menu.comida.items.hummus.name',
  6,
  Currency.EUR,
  'pages.menu.comida.items.hummus.description',
  'hummus.webp',  // ← Cambiar aquí
  undefined,
  [DietaryTag.Vegetarian, DietaryTag.Vegan, DietaryTag.GlutenFree]
),
```

### 4️⃣ Verificar
- Ejecuta `npm start`
- Abre http://localhost:4200/menu
- Verifica que todas las imágenes se muestran correctamente

## 🛠️ Herramientas de Optimización

- **TinyPNG** (https://tinypng.com) - Compresión PNG/JPG gratis
- **Squoosh** (https://squoosh.app) - Conversión a WebP de Google
- **ImageMagick** - Procesamiento batch por línea de comandos

```bash
# Convertir todas las JPG a WebP (ImageMagick)
magick mogrify -format webp -quality 85 *.jpg
```

## ❓ FAQ

**P: ¿Puedo usar JPG en lugar de WebP?**  
R: Sí, pero WebP reduce el tamaño hasta 30% manteniendo calidad.

**P: ¿Qué pasa si no tengo todas las imágenes?**  
R: Se mostrará un emoji como placeholder (💨, 🍹, 🍽️).

**P: ¿Puedo usar URLs externas?**  
R: Sí, cambia `'nombre.webp'` por `'https://...'` completa.

**P: ¿Los nombres deben ser exactos?**  
R: Sí, usa minúsculas, guiones y la extensión correcta.

---

**¿Tienes problemas?** Revisa que:
- ✅ Los archivos están en la carpeta correcta
- ✅ Los nombres coinciden exactamente (incluyendo extensión)
- ✅ Las imágenes no superan 500KB
- ✅ El formato es `.webp`, `.jpg` o `.png`
