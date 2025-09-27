# Aplicación de Gestión de Pagos

Esta aplicación es una demo para gestionar un listado de pagos, permitiendo operaciones de creación, lectura, edición y borrado (CRUD) sobre los registros. La interfaz está construida con Angular y PrimeNG, y cuenta con un sistema de autenticación basado en roles.

## 📝 Instrucciones de Despliegue

Para levantar el proyecto en un entorno de desarrollo local, sigue estos pasos:

1.  **Instalar dependencias:**
    Abre una terminal en la raíz del proyecto y ejecuta el siguiente comando para instalar todas las librerías necesarias.

    ```bash
    npm install
    ```

2.  **Iniciar el servidor:**
    Una vez finalizada la instalación, ejecuta el siguiente comando para iniciar el servidor de desarrollo de Angular.

    ```bash
    npm start
    ```

    O bien dentro de la terminal de algún editor de código complatible.

    ```bash
    ng s -o
    ```

    La aplicación estará disponible en `http://localhost:4200/`.

## 🏗️ Estructura del Proyecto

El proyecto sigue una arquitectura modular y organizada, utilizando componentes `standalone` de Angular.

-   **`src/app/core`**: Contiene la lógica central y los servicios transversales de la aplicación.
    -   **`guards`**: Guardianes de rutas. `auth.guard.ts` protege las rutas que requieren autenticación.
    -   **`interfaces`**: Define las estructuras de datos, como `auth.interface.ts` para usuarios y `payment.interface.ts` para los pagos.
    -   **`pipes`**: Pipes personalizados, como `role-badge.pipe.ts` para mostrar insignias según el rol del usuario.
    -   **`services`**:
        -   `auth.service.ts`: Gestiona la autenticación, la sesión del usuario y los permisos por roles (admin, mod, user).
        -   `payment.service.ts`: Administra los datos de los pagos (CRUD) usando un `signal` para mantener la reactividad.
        -   `alert.service.ts`: Centraliza el uso de notificaciones y alertas con la librería `SweetAlert2`.

-   **`src/app/pages`**: Agrupa los componentes que representan las páginas principales de la aplicación.
    -   **`login`**: Componente con el formulario de inicio de sesión. Incluye usuarios de prueba predefinidos para facilitar el acceso.
    -   **`main`**: Es el componente principal que orquesta la vista principal, integrando el `header`, `footer`, el listado de pagos (`payment-list`) y el formulario (`payment-form`).
    -   **`payment-list`**: Muestra la tabla de pagos. Incluye funcionalidades de filtrado, ordenación, exportación a Excel y acciones (editar, eliminar) que se habilitan según los permisos del usuario.
    -   **`payment-form`**: Formulario para crear o editar un registro de pago. Se muestra de forma condicional en la página principal.

-   **`src/app/shared`**: Componentes reutilizables en toda la aplicación.
    -   **`header`**: Cabecera de la aplicación. Muestra información del usuario y el botón para cerrar sesión.
    -   **`footer`**: Pie de página.

-   **`src/assets`**: Almacena recursos estáticos.
    -   **`data.ts`**: Archivo TypeScript que exporta datos de prueba (`mock data`). Este enfoque, en lugar de un JSON, permite generar datos dinámicos y más complejos de forma programática.

## ✨ Decisiones y Características

-   **Componentes Standalone**: El proyecto utiliza la arquitectura de componentes `standalone` de Angular, eliminando la necesidad de `NgModules` y simplificando la estructura.
-   **Gestión de Estado con Signals**: Se utilizan `signals` de Angular en `payment.service.ts` para gestionar el estado de los pagos, ofreciendo una reactividad eficiente y un código más limpio.
-   **Datos Mock Reactivos**: El uso de un archivo `.ts` para los datos de prueba (`data.ts`) en lugar de un `.json` fue una decisión para permitir la generación dinámica de una gran cantidad de registros, demostrando la capacidad de la aplicación para manejar volúmenes de datos.
-   **Control de Acceso por Roles (RBAC)**: `auth.service.ts` implementa un sistema de permisos simple basado en roles (admin, mod, user), que restringe acciones como crear, editar o eliminar registros en la interfaz.
-   **UI con PrimeNG y TailwindCSS**: La interfaz de usuario se construye con la librería de componentes PrimeNG, que ofrece elementos robustos como tablas y formularios. Se complementa con TailwindCSS para estilos personalizados.
-   **Notificaciones con SweetAlert2**: Se utiliza `SweetAlert2` a través de un servicio (`AlertService`) para ofrecer feedback visual al usuario de forma consistente.

## 🚀 Pendientes y Mejoras

-   Conectar la aplicación a un **backend real** para persistir los datos.
-   Ampliar las **pruebas unitarias** para componentes y servicios.
-   Implementar **pruebas de extremo a extremo (E2E)**.
-   Refinar la **experiencia de usuario (UX)** y el diseño de la interfaz (UI).
-   Implementar la subida real de archivos a un servicio de almacenamiento.

## 💡 Tecnologías de Apoyo

### Librerías Principales

-   **Angular**: Framework principal para el desarrollo de la aplicación.
-   **PrimeNG**: Librería de componentes UI para Angular.
-   **SweetAlert2**: Para la creación de alertas y notificaciones atractivas.
-   **xlsx**: Para la funcionalidad de exportación de datos a formato Excel.
-   **TailwindCSS**: Framework de CSS para estilos personalizados.

### IAs de Apoyo

Para acelerar el desarrollo, se contó con el apoyo de modelos de lenguaje avanzados:

-   **ChatGPT**: Se utilizó como asistente para la maquetación inicial, la resolución de problemas de lógica, la optimización de fragmentos de código y la implementación de funcionalidades específicas, como el uso de un archivo `.ts` para generar datos de prueba reactivos.

-   **Gemini**: Se utilizó para escribir algunos comentarios pertinentes en código y ayudar a redactar el archivo README.
