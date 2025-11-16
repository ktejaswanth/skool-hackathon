# E-Commerce Platform

A full-stack e-commerce application built with React.js, Spring Boot, and MySQL. This platform allows users to browse products, manage their shopping cart, place orders, and securely authenticate. Administrators have a dedicated dashboard to manage products, categories, and users.

---

## 🛠️ Tech Stack

* **Frontend:**

  * React.js
  * Material-UI
* **Backend:**

  * Spring Boot (RESTful APIs)
  * Spring Security (JWT Authentication)
* **Database:** MySQL
* **Hosting / Deployment:**

  * (e.g., Heroku, AWS EC2, Firebase Hosting)
* **Version Control:** Git & GitHub

---

## ✨ Features

* **User Authentication** (registration, login, JWT-based sessions)
* **Product Catalog**

  * Browse, filter, and search products
  * Product details page with images and descriptions
* **Shopping Cart & Wishlist**

  * Add/remove products
  * Persistent cart between sessions
  * Move items to/from wishlist
* **Checkout & Orders**

  * Place orders and view order history
  * Order status tracking
* **Admin Dashboard**

  * CRUD operations for products, categories, and users
  * Order management
* **Responsive UI** optimized for desktop and mobile devices
* **Image Upload & Management**

  * Upload product images
  * Preview and validate file types
* **Optional Payment Integration** (Stripe, Razorpay)

----------------

## 🚀 Getting Started

### Prerequisites

* Node.js (v14+)
* npm
* Java 11+
* Maven
* MySQL server
* Springboot

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/ecommerce-platform.git
   cd ecommerce-platform
   ```

2. **Setup Backend**

   ```bash
   cd backend
   # Configure your MySQL credentials in src/main/resources/application.yml
   mvn clean install
   mvn spring-boot:run
   ```

3. **Setup Frontend**

   ```bash
   cd frontend
   npm install vite@latest
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5178` for the frontend and `http://localhost:8080/api` for the backend APIs.

---

## 🔧 Configuration

* **Backend**: Edit `application.yml` to configure the database URL, username, password, and JWT secret.
* **Frontend**: Update `src/services/api.js` to point to your backend API base URL.

---

## 🙏 Acknowledgments

* [React](https://reactjs.org/)
* [Spring Boot](https://spring.io/projects/spring-boot)
* [Material-UI](https://mui.com/)
* [MySQL](https://www.mysql.com/)

