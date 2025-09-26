# Corporate Website

A modern corporate website built with Next.js frontend and NestJS backend.

## 🚀 Tech Stack

### Frontend (Next.js)
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth interactions
- **React Query** - Data fetching and state management
- **Sonner** - Toast notifications
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client for API requests

### Backend (NestJS)
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type safety
- **JWT** - Authentication and authorization
- **Passport** - Authentication middleware
- **Helmet** - Security headers
- **Swagger** - API documentation
- **Class Validator** - Request validation
- **Compression** - Response compression
- **Throttling** - Rate limiting

## 📁 Project Structure

```
corporate-website/
├── src/                    # Next.js frontend
│   ├── app/               # App Router pages
│   ├── components/        # Reusable components
│   │   └── ui/           # UI components
│   ├── lib/              # Utilities and configurations
│   └── hooks/            # Custom React hooks
├── backend/              # NestJS backend
│   ├── src/              # Source code
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── app.service.ts
│   │   └── main.ts
│   └── test/             # E2E tests
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Frontend Setup
```bash
cd corporate-website
npm install
npm run dev
```

### Backend Setup
```bash
cd corporate-website/backend
npm install
npm run start:dev
```

## 🚀 Development

### Frontend Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Backend Development
```bash
npm run start:dev    # Start with hot reload
npm run build        # Build the application
npm run start        # Start production server
npm run test         # Run unit tests
npm run test:e2e     # Run e2e tests
npm run lint         # Run ESLint
```

## 📚 API Documentation

Once the backend is running, visit:
- **Swagger UI**: http://localhost:3001/api/docs
- **Health Check**: http://localhost:3001/health

## 🔧 Configuration

### Environment Variables

Create `.env.local` in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=Corporate Website
NODE_ENV=development
```

Create `.env` in the backend directory:
```env
PORT=3001
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-here
FRONTEND_URL=http://localhost:3000
```

## 🎨 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Mode** - Built-in dark mode support
- **Animations** - Smooth animations with Framer Motion
- **Toast Notifications** - User feedback with Sonner
- **API Integration** - Axios with interceptors
- **Type Safety** - Full TypeScript support
- **Security** - Helmet, CORS, and validation
- **Documentation** - Swagger API docs
- **Performance** - Optimized builds and caching

## 📦 Dependencies

### Frontend Dependencies
- `@tanstack/react-query` - Data fetching
- `animate.js` - Animation utilities
- `axios` - HTTP client
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `sonner` - Toast notifications
- `clsx` - Conditional className utility
- `tailwind-merge` - Tailwind class merging

### Backend Dependencies
- `@nestjs/jwt` - JWT authentication
- `@nestjs/passport` - Authentication strategies
- `@nestjs/config` - Configuration management
- `@nestjs/throttler` - Rate limiting
- `@nestjs/swagger` - API documentation
- `passport-jwt` - JWT strategy
- `passport-local` - Local strategy
- `helmet` - Security headers
- `compression` - Response compression
- `class-validator` - Validation decorators
- `class-transformer` - Object transformation
- `bcryptjs` - Password hashing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.