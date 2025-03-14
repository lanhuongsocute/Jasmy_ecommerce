# 🛒 **Jasmy_ecommerce: E-commerce Website Management Software**

![alt text](image.png)

## 📝 **Project Description**

This project is a full-stack e-commerce website management software built using **Laravel** for the backend and **ReactJS** for the frontend. It provides a seamless experience for both administrators and customers, focusing on performance, scalability, and user-friendliness.

---

## 📦 **Technologies Used**

- 🧩 **Backend:** Laravel (PHP framework)
- 💻 **Frontend:** ReactJS
- 🗄️ **Database:** MySQL
- 🌍 **Version Control:** Git & GitHub
- 📦 **Package Managers:** Composer (PHP), npm/yarn (Node.js)

---

## 💡 **Features**

### 🌐 **Frontend (ReactJS)**

- 🎨 Responsive and modern user interface
- 🔎 Product browsing, searching, and filtering
- 🛒 Shopping cart and wishlist functionality
- 🔒 Secure user authentication and profile management
- 📦 Order tracking and real-time notifications

### 🗄️ **Backend (Laravel)**

- 🛡️ RESTful API for frontend communication
- 📊 Admin panel for managing products, orders, and users
- 🔑 Secure authentication using Laravel Sanctum
- ✉️ Email notifications and order updates _(future feature)_
- 🗝️ Role-based access control

---

## ⚙️ **Installation Guide**

### ✅ **1. Clone the Repository**

```bash
git clone https://github.com/lanhuongsocute/Jasmy_ecommerce.git
cd Jasmy_ecommerce
```

---

### 💾 **2. Backend Setup (Laravel)**

```bash
cd laravel-backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

---

### 🌱 **3. Frontend Setup (ReactJS)**

```bash
cd ../react-frontend
npm install
npm start
```

---

## 🚀 **How to Run the Project**

1. Start the Laravel backend server using `php artisan serve`.
2. Run the ReactJS frontend using `npm start`.
3. Access the application via `http://localhost:3000`.

---

## 🗂️ **Project Structure**

```plaintext
Jasmy_ecommerce
├── laravel-backend
│   ├── app
│   ├── database
│   ├── routes
│   └── .env *(not available)*
└── react-frontend
    ├── src
    ├── public
    └── package.json *(not available)*
```

---

## 🌍 **Contributing**

🤝 Contributions are welcome! Feel free to submit pull requests or open issues.

---

## 📄 **License**

📝 This project is licensed under the [MIT License](LICENSE).

---

## 📞 **Contact**

📧 For more information, contact **lanhuongsocute** at [GitHub Profile](https://github.com/lanhuongsocute).
