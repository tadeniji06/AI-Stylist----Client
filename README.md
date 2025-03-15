# AI-Powered Personal Stylist

An intelligent fashion assistant that helps users curate outfits, manage their wardrobe, and get personalized styling recommendations based on their preferences, mood, occasion, and weather.

## Features

- **User Authentication** (Signup, Login, Password Reset)
- **Onboarding Flow** (Collects user preferences like favorite colors, style, and demographics)
- **Wardrobe Management** (Upload and categorize clothing items)
- **Outfit Curation** (AI-generated outfit suggestions based on weather, occasion, and personal style)
- **Wishlist** (Save and track fashion items from external stores)
- **AI Styling Recommendations** (Personalized suggestions based on user input and wardrobe data)
- **Gamification** (Engage users with streaks, outfit ratings, and fashion challenges)

## Tech Stack

### Backend
- **Node.js** + **Express.js** (Server-side logic & API handling)
- **MongoDB** (Database for storing user data, outfits, wardrobe, and preferences)
- **Mongoose** (Schema modeling)
- **JWT Authentication** (Secure user sessions)
- **Bcrypt.js** (Password hashing)
- **EmailJS API** (Handles email notifications like password reset OTPs)

### Frontend
- **React.js / React Native** (Dynamic and interactive UI/UX)
- **Tailwind CSS** (Styling)
- **Framer Motion & GSAP** (Animations)
- **Redux Toolkit / React Query** (State & API data management)

### AI Integration
- **OpenAI API** (Intelligent fashion recommendations)
- **Weather API** (Live weather data for styling suggestions)

## Installation

### Prerequisites
- Node.js installed
- MongoDB set up (Local or Cloud)
- `.env` file with necessary API keys

### Steps
1. Clone the repo:
   ```sh
   git clone https://github.com/yourusername/ai-stylist.git
   ```
2. Install dependencies:
   ```sh
   cd ai-stylist
   npm install
   ```
3. Set up `.env` file with:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAILJS_API_KEY=your_emailjs_key
   OPENAI_API_KEY=your_openai_key
   WEATHER_API_KEY=your_weather_api_key
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```
5. Navigate to the frontend folder and start the client:
   ```sh
   cd client
   npm install
   npm start
   ```

## API Routes

### Auth & User Management
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Authenticate user & return token
- `POST /api/auth/requestReset` - Request password reset OTP
- `POST /api/auth/resetPassword` - Reset password with OTP
- `GET /api/user/:id` - Fetch user profile with wardrobe, outfits, and wishlist

### Wardrobe & Outfit
- `POST /api/wardrobe/add` - Add a clothing item
- `GET /api/wardrobe/` - Get all clothing items
- `POST /api/outfit/create` - Generate and save an outfit
- `GET /api/outfit/` - Fetch user’s saved outfits

### Wishlist
- `POST /api/wishlist/add` - Add an item to wishlist
- `GET /api/wishlist/` - Retrieve all wishlist items

## Roadmap
- [ ] AI outfit suggestions based on body type
- [ ] User-to-user outfit sharing & feedback
- [ ] Voice-based fashion assistant
- [ ] AR-based virtual try-on

## Contributing
Pull requests are welcome! Follow these steps:
1. Fork the repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a pull request

## License
This project is licensed under the MIT License.

---

Made with ❤️ by Tunmise

