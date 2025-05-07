# 📝 Formulario con Validación en Tiempo Real

Este ejercicio consiste en construir un formulario interactivo que valide los campos mientras el usuario escribe, sin necesidad de enviar el formulario. El objetivo es mejorar la experiencia de usuario detectando errores de forma inmediata.

## 🎯 Objetivo

- Validar en tiempo real los campos del formulario (por ejemplo, que el email tenga `@`).
- Marcar los campos inválidos con estilos visuales (como borde rojo).
- Evitar que el formulario se envíe si hay errores.

## 🚀 Funcionalidades clave

- **Validación con eventos `input` y `blur`**: Se escucha cada cambio en los campos del formulario.
- **Prevención del envío si hay errores**: Se intercepta el evento `submit`.
- **Mensajes o estilos de error dinámicos**: El usuario ve inmediatamente qué necesita corregir.

## 🧠 Conceptos que se ponen en práctica

- DOM y eventos (`input`, `blur`, `submit`)
- Manipulación de clases y estilos en JavaScript
- Validación básica de datos (email, campos vacíos, etc.)

## 🧪 Requisitos técnicos

- Al menos un campo de email con validación de formato (`@` obligatorio)
- Al menos un campo requerido (por ejemplo, nombre)
- El formulario debe tener un botón de enviar, pero este solo debe funcionar si no hay errores


## 💡 Ejemplo visual

- Cuando el campo de email no es valdo, el borde se pone rojo
- Al completar correctamente, el borde vuelve a verde o al estado normal
- Si el usuario hace clic en "Enviar" y hay errores, se evita el envío y se muestran alertas o estilos de error
- Mostrar un mensaje debajo de cada campo con el tipo de error detectado

---



