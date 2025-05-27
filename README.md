
# 📚 Not an eBook

**Not an eBook** es una plataforma digital diseñada para la gestión, visualización y simulación de la venta de libros físicos.  
Este proyecto tiene como objetivo ofrecer una solución moderna e intuitiva que facilite la comercialización de libros, integrando una interfaz amigable, persistencia de datos y despliegue mediante contenedores Docker.


## 🚀 Descripción del Proyecto

La aplicación permite a los usuarios acceder a una biblioteca digital organizada, visualizar libros, registrar información relevante y simular una experiencia personalizada de compra y venta.  
Gracias a una arquitectura moderna, se integran de forma cohesiva el backend, el frontend y la base de datos, garantizando fluidez y eficiencia en el funcionamiento del sistema.


## 🛠️ Tecnologías Utilizadas

- **Java** – Lógica del backend.
- **Spring Boot** – Framework para el desarrollo de servicios backend.
- **Docker & Docker Compose** – Para contenerización y despliegue.
- **TypeScript & Angular** – Para el desarrollo del frontend (si aplica).
- **HTML/CSS** – Estructura y diseño de la interfaz.
- **PostgreSQL / MySQL** – Base de datos relacional (según configuración).
- **Jupyter Notebook** – Para automatizar la población de la base de datos.

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

## ✨ Funcionalidades principales
- **Gestión de biblioteca digital**
- **Visualización y simulación de venta de libros**
- **Interfaz gráfica intuitiva**
- **Almacenamiento de datos persistente**
- **Arquitectura modular y escalable**

## 👥 Integrantes del equipo
   - **Kevin Guzman**
   - **Juan Roa**
   - **Daniel Ballesteros**

### 📌 Primera versión del proyecto
🔗 https://github.com/Kevin2211875/not-an-ebook.git



