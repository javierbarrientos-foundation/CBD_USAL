# Departamento de Ciencias Biomédicas y del Diagnóstico — Universidad de Salamanca (USAL)

Portal web institucional y científico del **Departamento de Ciencias Biomédicas y del Diagnóstico (Facultad de Medicina, Universidad de Salamanca)**.

Desarrollado con **React 19 + TypeScript + Vite + Tailwind CSS v4**.

---

## 🚀 Guía de Instalación y Arranque en Visual Studio Code

### Requisitos previos
* **Node.js**: Versión 18.0 o superior (recomendado Node.js LTS 20 o 22). Descárgalo desde [nodejs.org](https://nodejs.org/).
* **Visual Studio Code**: [code.visualstudio.com](https://code.visualstudio.com/).

---

### Paso a Paso para arrancar el proyecto

#### 1. Abrir la carpeta en Visual Studio Code
1. Abre **Visual Studio Code**.
2. Ve al menú superior: **Archivo (File) > Abrir carpeta (Open Folder...)**.
3. Selecciona la carpeta raíz de este proyecto descargado.

#### 2. Abrir la terminal integrada
* Pulsa el atajo `Ctrl + ñ` (Windows/Linux) o `Cmd + J` (macOS), o ve a **Terminal > Nueva Terminal**.

#### 3. Instalar las dependencias
En la terminal integrada, ejecuta el siguiente comando:

```bash
npm install
```

*Esto descargará las dependencias necesarias (`react`, `lucide-react`, `tailwindcss`, `vite`, etc.) en la carpeta `node_modules`.*

#### 4. Iniciar el servidor de desarrollo
Una vez finalizada la instalación, arranca el servidor local con:

```bash
npm run dev
```

La consola te mostrará una dirección similar a:
```text
  VITE v8.3.0  ready in 250 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

#### 5. Ver el sitio en tu navegador
* Abre tu navegador (Chrome, Edge, Firefox, Safari) y entra en:
  👉 **`http://localhost:3000`**

Cualquier cambio que realices en el código (`src/`) se reflejará al instante en el navegador gracias a Vite.

---

## 🛠️ Otros comandos disponibles

* **Compilar para producción (Build)**:
  ```bash
  npm run build
  ```
  Genera los archivos optimizados listos para desplegar en la carpeta `/dist`.

* **Probar la versión de producción localmente (Preview)**:
  ```bash
  npm run preview
  ```

* **Comprobación de tipos TypeScript**:
  ```bash
  npm run lint
  ```

---

## 🎨 Paleta Corporativa Oficial USAL Utilizada

El diseño aplica fielmente los cuatro colores corporativos de la Universidad de Salamanca:

| Color | Código HEX | Rol en el Sistema Visual |
|---|---|---|
| **Rojo USAL** | `#d22020` | **Color dominante principal (~70%)**: Botones de acción, indicadores activos, métricas, titulares y contrastes. |
| **Azul USAL** | `#385e9d` | **Color complementario institucional (~30%)**: Facultad de Medicina, credenciales de Doctorado RUCT, enlaces y nodos de investigación. |
| **Gris Oscuro** | `#4d4d4d` | Textos editoriales, descripciones curriculares, subtítulos e iconografía. |
| **Gris Claro** | `#eaeaea` | Superficies de apoyo, fondos de tarjetas, divisores y microinteracciones. |

---

## 📁 Estructura del Proyecto

```text
├── public/                 # Recursos estáticos
│   └── images/             # Fotografías reales (microscopía, sede, facultades, logos USAL/CBD)
├── src/
│   ├── components/
│   │   ├── cards/          # Tarjetas científicas especializadas
│   │   │   ├── NewsCard.tsx
│   │   │   ├── PersonCard.tsx
│   │   │   ├── PublicationCard.tsx
│   │   │   ├── ResearchCard.tsx
│   │   │   └── TeachingCard.tsx
│   │   ├── layout/         # Estructura global
│   │   │   ├── Breadcrumbs.tsx   # Migas de pan jerárquicas con selector de sección
│   │   │   ├── Footer.tsx        # Pie de página institucional USAL
│   │   │   ├── Header.tsx        # Cabecera con menú, buscador y modo nocturno
│   │   │   └── SearchModal.tsx   # Buscador interactivo (Cmd+K)
│   │   ├── sections/       # Secciones temáticas del portal
│   │   │   ├── AreasSection.tsx
│   │   │   ├── Committees.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── DepartmentIntro.tsx
│   │   │   ├── DocumentsSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Leadership.tsx
│   │   │   ├── NewsSection.tsx
│   │   │   └── TeachingSection.tsx
│   │   └── visuals/        # Gráficos y visualizaciones científicas
│   │       ├── MolecularPattern.tsx
│   │       ├── ResearchNetwork.tsx   # Ecosistema interactivo de transferencia biomédica
│   │       ├── ScientificBackground.tsx # Canvas dinámico de partículas/nodos
│   │       └── Timeline.tsx          # Hitos y memoria histórica USAL
│   ├── data/
│   │   └── departmentData.ts   # Datos auténticos extraídos del portal y WordPress
│   ├── types/
│   │   └── index.ts            # Interfaces TypeScript tipadas
│   ├── App.tsx             # Componente raíz de la aplicación
│   ├── index.css           # Tokens CSS de la USAL, glassmorphism y Tailwind v4
│   └── main.tsx            # Punto de entrada React
├── index.html              # Plantilla HTML con SEO y metadatos
├── package.json            # Configuración de dependencias y scripts npm
├── tsconfig.json           # Configuración de TypeScript
└── vite.config.ts          # Configuración de Vite y plugins
```

---

## ♿ Accesibilidad y Rendimiento
* **WCAG 2.2 AA**: Contrastes de color certificados sobre fondos claros y oscuros.
* **Prefers-Reduced-Motion**: Si el sistema del usuario tiene activada la reducción de movimiento, las partículas y transiciones complejas se suavizan o desactivan automáticamente.
* **Navegación por Teclado**: Soporte completo para tabulación, enlaces de salto (`skip-link`) y atajo `Cmd + K` / `Ctrl + K` para la búsqueda instantánea.
