# Stock Management System

## Description
This is a stock management system built using modern web technologies. It provides authentication, CRUD operations for stock items, and data visualization for businesses to efficiently manage their inventory.

## Live Demo
A live demo of the project is available at: [Live Demo](<demo_url>)

## Screenshots
![Dashboard Screenshot](<screenshot_url>)
![Stock Table Screenshot](<screenshot_url>)

## Technologies Used
- **Frontend:** React, Redux Toolkit, React Router, Material-UI, Tailwind CSS
- **State Management:** Redux Toolkit, Redux Persist
- **Forms & Validation:** Formik, Yup
- **API Handling:** Axios, Custom Hooks
- **Notifications:** React Toastify
- **Development Tools:** Vite

## Installation
1. Clone the repository:
   ```sh
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```sh
   cd stock-management-system
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure
```
src/
│-- app/
│   ├── store.js
│
│-- assets/
│
│-- components/
│   ├── Cards/
│   │   ├── BrandsCard.jsx
│   │   ├── FirmsCard.jsx
│   ├── Modal/
│   │   ├── BrandModal.jsx
│   │   ├── FirmModal.jsx
│   │   ├── ProductModal.jsx
│   │   ├── PurchasesModal.jsx
│   │   ├── SalesModal.jsx
│   ├── Table/
│   │   ├── ProductsTable.jsx
│   │   ├── PurchasesTable.jsx
│   │   ├── SalesTable.jsx
│   ├── AuthHeader.jsx
│   ├── AuthImage.jsx
│   ├── Charts.jsx
│   ├── ErrorBoundary.jsx
│   ├── KpiCard.jsx
│   ├── LoginForm.jsx
│   ├── MuiListItems.jsx
│   ├── RegisterForm.jsx
│
│-- features/
│   ├── authSlice.jsx
│   ├── stockSlice.jsx
│
│-- helper/
│   ├── ToastNotify.js
│
│-- hook/
│   ├── useAuthCall.jsx
│   ├── useAxios.jsx
│   ├── useStockCall.jsx
│
│-- pages/
│   ├── Brands.jsx
│   ├── Dashboard.jsx
│   ├── Firms.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Products.jsx
│   ├── Purchases.jsx
│   ├── Register.jsx
│   ├── Sales.jsx
│
│-- registerCall/
│   ├── registerCall.jsx
│
│-- router/
│   ├── AppRouter.jsx
│   ├── PrivateRouter.jsx
│
│-- styles/
│   ├── globalStyles.js
│
│-- App.jsx
```

## Features
- **User Authentication:** Login, registration, and logout functionality
- **Protected Routes:** Private routes for authenticated users
- **Stock Management:** CRUD operations for Firms, Brands, Products, Purchases, and Sales
- **Modals for Data Entry:** Popup forms for adding and editing stock items
- **Data Tables:** Display stock details with sorting and filtering capabilities
- **State Management:** Global state persistence with Redux Toolkit
- **Real-time Notifications:** User-friendly toast notifications for actions
- **Responsive UI:** Built with Material-UI and Tailwind CSS

## API Requests
### Authentication
- **Login:** `POST /api/auth/login`
- **Register:** `POST /api/auth/register`
- **Logout:** `POST /api/auth/logout`

### Stock Management
- **Get Products:** `GET /api/products`
- **Create Product:** `POST /api/products`
- **Update Product:** `PUT /api/products/:id`
- **Delete Product:** `DELETE /api/products/:id`

### Purchases
- **Get Purchases:** `GET /api/purchases`
- **Create Purchase:** `POST /api/purchases`


## Contribution
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request.

## Authors
- **[Your Name]** - [GitHub Profile](<github_url>)
- **Contributors:** List of contributors can be found [here](<contributors_url>).

## License
This project is open-source. Feel free to modify and distribute it as needed.

