# WhatsApp Live Chat UI

A modern WhatsApp Live Chat interface built with Next.js 15.5.2, shadcn/ui 3.2.1, and Tailwind CSS 4.1.13.

## Features

- **Modern UI Design**: Faithful recreation of WhatsApp's live chat interface
- **Next.js 15.5.2**: Latest version with App Router and React Server Components
- **shadcn/ui 3.2.1**: Modern component library with customizable UI components
- **Tailwind CSS 4.1.13**: Latest Tailwind with improved performance and features
- **Responsive Design**: Mobile-first approach with responsive layouts
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Well-organized, reusable React components

## Tech Stack

- **Framework**: Next.js 15.5.2
- **UI Components**: shadcn/ui 3.2.1
- **Styling**: Tailwind CSS 4.1.13
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: npm

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with custom CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx            # Main page component
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── avatar.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   └── separator.tsx
│   ├── layout/             # Layout components
│   │   ├── Header.tsx      # Top navigation header
│   │   └── SubNavigation.tsx # Secondary navigation tabs
│   ├── chat/               # Chat-related components
│   │   ├── ChatSidebar.tsx # Left sidebar with chat list
│   │   └── ChatArea.tsx    # Main chat conversation area
│   └── profile/            # Profile components
│       └── UserProfile.tsx # Right sidebar with user details
└── lib/
    └── utils.ts            # Utility functions
```

## Components

### Layout Components

- **Header**: Main navigation with logo, menu items, and user controls
- **SubNavigation**: Secondary navigation tabs (Live Chat, Contacts, Settings)

### Chat Components

- **ChatSidebar**: Left panel with chat list, search, filters, and user tabs
- **ChatArea**: Main conversation area with messages and input controls

### Profile Components

- **UserProfile**: Right panel with user information, settings, and actions

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd whatsapp-livechat
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## UI Features Implemented

- Top navigation header with logo and menu items
- Secondary navigation tabs
- Chat sidebar with user list and filters
- Main chat area with conversation messages
- Message input with formatting tools
- User profile sidebar with detailed information
- Responsive design and proper spacing
- Custom color scheme matching WhatsApp design
- Icons and interactive elements

## Notes

- This is a UI-only implementation without backend functionality
- All interactive elements are styled but not functionally connected
- The design closely matches the original WhatsApp Live Chat interface
- Uses modern React patterns with TypeScript for type safety
- Optimized for both desktop and mobile viewing experiences
