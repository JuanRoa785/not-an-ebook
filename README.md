

# 📚 Not an eBook

**Not an eBook** es una plataforma de comercio electrónico enfocada en la venta de libros. Su objetivo principal es ofrecer una experiencia clara y eficiente tanto para los usuarios que desean comprar libros digitales, como para el dueño del emprendimiento, quien puede llevar el control de las ventas y gestionar fácilmente el catálogo de productos disponibles.

## 🚀 Descripción del Proyecto

Esta aplicación permite a los clientes consultar libros, ver sus detalles, y simular una compra. Al mismo tiempo, el administrador del sistema puede gestionar (crear, leer, actualizar y eliminar) libros del inventario de forma sencilla, con soporte de imágenes alojadas en la nube mediante **Cloudinary**. Esta doble funcionalidad permite controlar el flujo de ventas, la visualización del catálogo, y la administración eficiente de los productos.

## 🛠️ Tecnologías Utilizadas

- **Java + Spring Boot** – Backend y lógica del sistema
- **Docker & Docker Compose** – Despliegue y contenedores
- **TypeScript & React** – Interfaz gráfica (si aplica)
- **HTML/CSS** – Estructura y diseño de la interfaz
- **PostgreSQL / MySQL** – Almacenamiento de datos
- **Cloudinary** – Gestión de imágenes de los productos
- **Jupyter Notebook** – Apoyo documental o análisis

## ⚙️ Estructura del Proyecto



```plaintext
not-an-ebook/
│
├── Biblioteca/           # Componentes relacionados con los libros
├── Database/             # Scripts y archivos de configuración de base de datos
├── not-an-ebook/         # Código fuente principal
├── docker-compose.yaml   # Configuración de servicios con Docker
├── README.md
```
## Diagrama de la base de datos
![not_an_ebook - public](https://github.com/user-attachments/assets/e4ad0031-3494-43b3-8d92-4d2852e7a789)

## 📦 Instalación y Ejecución Local

### ✅ Requisitos previos

- Tener instalado [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/)
- Tener instalado [Git](https://git-scm.com/)

---

### 🚀 Pasos para ejecutar el proyecto localmente

1. **Clona el repositorio:**

```bash
git clone https://github.com/JuanRoa785/not-an-ebook.git
cd not-an-ebook
```

2. **Construye y levanta los servicios con Docker Compose:**
```bash
   docker-compose up --d
```

3. **Accede a la aplicación**
```plaintext
🔹 Frontend (Angular):            http://localhost:4200
🔹 Backend (Swagger):             http://localhost:8081/swagger-ui/index.html
🔹 Base de datos (PostgreSQL):    Puerto: 5435
                                  Usuario: postgres
                                  Contraseña: adminPostgres
                                  Base de datos: not_an_ebook
```

4. **Inicia sesión con las credenciales de acceso de administrador:**
```plaintext
   📧 Correo:    admin@admin.com
   🔐 Contraseña: adminadmin
```
> ⚠ **Importante:** También puedes iniciar sesión con cualquiera de los 100 clientes registrados inicialmente. La contraseña para estos usuarios es su nombre duplicado.  
>
 **Por ejemplo:**  
 Correo: `laura@lopez.com`  
 Contraseña: `lauralaura`

---

## ✨ Funcionalidades principales

- **Gestión de biblioteca digital**
- **Visualización y simulación de venta de libros**
- **Interfaz gráfica intuitiva**
- **Almacenamiento de datos persistente**
- **Arquitectura modular y escalable**
- **Servicio intermedio con Cloudinary** para almacenar y acceder eficientemente a las portadas de los libros

---

## 🗂️ Datos precargados en la base de datos

La base de datos viene con información de ejemplo que permite probar todas las funcionalidades del sistema desde el primer momento:

- 📚 **75 productos** (libros físicos)
- 👥 **100 usuarios** con sus respectivas direcciones
- 🧾 **1500 ventas** registradas
- 📦 **3700 detalles de venta** asociados a los pedidos

---

## 👥 Integrantes del equipo
   - **Kevin Guzman**
   - **Juan Roa**
   - **Daniel Ballesteros**

---

### 📌 Primera versión del proyecto
🔗 https://github.com/Kevin2211875/not-an-ebook.git



