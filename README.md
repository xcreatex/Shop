# ShopReact - E-Commerce Website

## 📋 Overview

ShopReact is a fully responsive e-commerce website built with React and Vite. It integrates with the Fake Store API to provide a complete shopping experience including product browsing, filtering, cart management, and checkout functionality. This project demonstrates modern React development practices including hooks, context API, and responsive design principles.

## ✨ Features

### User Authentication
- JWT-based authentication system
- Secure login with token storage
- Protected routes for authenticated users
- Automatic redirection for unauthenticated users

### Product Management
- Browse all products with responsive grid layout
- Filter products by category
- Search functionality for products by title or description
- Detailed product view with complete information

### Shopping Cart
- Add products to cart from product listing or detail pages
- Update product quantities in cart
- Remove items from cart
- Persistent cart data using localStorage
- Real-time cart total calculation

### User Interface
- Mobile-first responsive design
- Clean, modern UI with intuitive navigation
- Loading states and error handling
- Animated notifications for user actions

## 🛠️ Technologies Used

- **React** - Frontend library for building user interfaces
- **Vite** - Next generation frontend tooling
- **React Router v6** - For navigation and routing
- **Context API** - For state management
- **CSS** - Plain CSS with mobile-first approach
- **Fake Store API** - For product data and authentication
- **localStorage** - For client-side data persistence

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/shop-react.git
   cd shop-react
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📱 Usage

### Login

Use the following credentials to log in:
- Username: `mor_2314`
- Password: `83r5^_`

These credentials are provided by the Fake Store API for testing purposes.

### Browsing Products

- The home page displays all available products
- Use the category buttons to filter products by category
- Use the search bar to find products by name or description

### Product Details

- Click on any product to view its detailed information
- From the product detail page, you can:
  - View high-resolution product image
  - Read detailed product description
  - See product rating and review count
  - Select quantity
  - Add the product to your cart

### Managing Your Cart

- Click the "Add to Cart" button on any product to add it to your cart
- Navigate to the Cart page using the navigation link
- In the cart, you can:
  - Increase or decrease product quantities
  - Remove products from your cart
  - See the subtotal for each product and the cart total
  - Proceed to checkout

### Checkout

- Click the "Checkout" button in the cart to place your order
- A confirmation message will appear, and your cart will be cleared

### Logging Out

- Click the "Logout" button in the header to log out
- This will clear your authentication token and redirect you to the login page

## 📁 Project Structure

\`\`\`
shop-react/
├── public/
│   └── ... (static assets)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── ProductDetail.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Cart.css
│   │   ├── Header.css
│   │   ├── Home.css
│   │   ├── Login.css
│   │   ├── ProductCard.css
│   │   └── ProductDetail.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
\`\`\`

## 🔌 API Integration

This project uses the [Fake Store API](https://fakestoreapi.com/) for product data and authentication. The API provides the following endpoints:

- `GET /products` - Get all products
- `GET /products/categories` - Get all categories
- `GET /products/category/:categoryName` - Get products by category
- `GET /products/:id` - Get a single product
- `POST /auth/login` - Authenticate user

## 📸 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x450?text=Home+Page)

### Product Detail
![Product Detail](https://via.placeholder.com/800x450?text=Product+Detail)

### Shopping Cart
![Shopping Cart](https://via.placeholder.com/800x450?text=Shopping+Cart)

### Login Page
![Login Page](https://via.placeholder.com/800x450?text=Login+Page)

## 🌐 Deployment

### Building for Production

To build the application for production, run:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

This will generate a `dist` directory with the production build.

### Deploying to Vercel

1. Install Vercel CLI:
   \`\`\`bash
   npm install -g vercel
   \`\`\`

2. Deploy:
   \`\`\`bash
   vercel
   \`\`\`

### Deploying to Netlify

1. Create a `netlify.toml` file in the root directory:
   ```toml
   [build]
     publish = "dist"
     command = "npm run build"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   \`\`\`

2. Deploy using Netlify CLI or connect your GitHub repository to Netlify.

## 🔧 Environment Variables

No environment variables are required for this project as it uses the public Fake Store API.

## 🧪 Testing

To run tests (if implemented):

\`\`\`bash
npm test
# or
yarn test
\`\`\`

## 🛣️ Roadmap and Future Improvements

- User registration functionality
- Product reviews and ratings
- Wishlist feature
- Order history
- Payment gateway integration
- Admin dashboard for product management
- Unit and integration tests
- Dark mode support
- Internationalization (i18n)
- Performance optimizations

## 🐛 Known Issues

- The Fake Store API sometimes experiences delays or downtime
- Product images may load slowly due to external hosting
- Limited product data as this is a demo API

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) for the development framework
- [React Router](https://reactrouter.com/) for routing
- All the open-source contributors whose libraries made this project possible

## 📞 Contact

My email - [create12212@gmail.com](mailto:your.email@example.com)

Project Link: [https://github.com/xcreatex/shop](https://github.com/xcreatex/shop)

---

Made with ❤️ by Aman Kashyap
# Shop
# Shop
