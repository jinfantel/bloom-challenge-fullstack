# Desafío Técnico – Bloom Reuse

## 🙋 Presentación

Hola, soy Jerónimo Infante, y en este repositorio presento la solución que desarrollé para el desafío técnico de Bloom Reuse.  
El objetivo fue construir, a partir de la base entregada, una aplicación web que permita visualizar preguntas frecuentes personalizadas por marca, a partir de información dinámica obtenida desde un backend.

---

## 📁 Estructura del Proyecto

### Frontend (Next.js + Tailwind)

- **`app/page.tsx`**  
  Página principal con layout general. Orquesta los componentes y mantiene el estado de marca seleccionada.

- **`components/BrandSelector.tsx`**  
  Muestra los botones de selección de marca. Informa al componente padre cuál fue seleccionada.

- **`components/FAQList.tsx`**  
  Renderiza preguntas frecuentes dinámicamente según la configuración de cada marca.

- **`types/brand.ts`**  
  Define los tipos TypeScript para la estructura de marcas (`Brand`) y configuración (`BrandSetting`).

### Backend (Node + Express simulado)

- **`data/brands.ts`**  
  Contiene información pública básica de cada marca (nombre, ID, URL).

- **`data/brands-settings.ts`**  
  Contiene la configuración interna que define cómo operar cada marca (envíos, pagos, etc.).

- **`services/brand.ts`**  
  Contiene las funciones `list()` y `retrieve(id)` que combinan la información de marca y configuración.

- **`routes/brand.ts`**  
  Define los endpoints `/brands` y `/brands/:id`.

---

## ✅ Lo que funciona

- Visualización correcta de preguntas frecuentes para cada marca.
- Componente desacoplado para mostrar preguntas dinámicas.
- Separación de responsabilidades clara y ordenada en carpetas.
- Diseño responsive básico con mejoras visuales aplicadas en FAQ.

---

## 🔧 Qué mejoraría

- Extraer las preguntas como plantillas JSON desde el backend para escalar sin tocar frontend.
- Agregar validación de los datos recibidos.
- Implementar pruebas unitarias para `FAQList` y `BrandSelector`.

---

## 🚀 Cómo escalaría esta solución

- Convertir la configuración de preguntas en un sistema dinámico gestionado desde el backend.
- Permitir a cada marca definir sus reglas de negocio en una interfaz de administración.
- Separar el backend en microservicios o funciones serverless si escala la carga.

---

## 🎥 Guion para Video de Presentación
Link: https://uccl0-my.sharepoint.com/:v:/g/personal/jinfantel_uc_cl/EQ4v5kME5qdFhBwLV9SaCKcB4meqLA3yeLua5tyPk0xb_w?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=q0jkZu