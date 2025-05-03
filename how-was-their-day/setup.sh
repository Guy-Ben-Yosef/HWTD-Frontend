#!/bin/bash

# Create directories
mkdir -p src/app/api/auth/\[...nextauth\]
mkdir -p src/app/dashboard
mkdir -p src/components/auth
mkdir -p src/components/dashboard
mkdir -p src/components/layout
mkdir -p src/lib
mkdir -p src/types
mkdir -p public/images
mkdir -p src/styles

# Create auth files
touch src/app/api/auth/\[...nextauth\]/route.ts
touch src/app/page.tsx
touch src/components/auth/LoginButton.tsx
touch src/components/auth/GoogleButton.tsx

# Create dashboard files
touch src/app/dashboard/page.tsx
touch src/components/dashboard/DashboardHeader.tsx
touch src/components/dashboard/RecordingsList.tsx
touch src/components/dashboard/RecordingSummary.tsx

# Create layout components
touch src/components/layout/Header.tsx
touch src/components/layout/Footer.tsx
touch src/app/layout.tsx

# Create utils and types
touch src/lib/auth.ts
touch src/types/index.ts

# Create CSS files
touch src/styles/globals.css
touch src/styles/auth.css
touch src/styles/dashboard.css
touch src/styles/layout.css

# Create configuration files
touch .env.local
touch src/middleware.ts

echo "File structure created successfully!"