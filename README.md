# **NodeJS Fullstack Boilerplate**

This is a boilerplate for a fullstack application using Node.js, Express, React.

```bash
git clone https://github.com/kavinda-100/NodeJS-Fullstack-Boilerplate.git
```

1. clone the repository
2. run `npm install` in the root directory
3. run `npm run dev` to start the development server
4. run `npm run build` to build the project
5. run `npm start` to start the production server
6. cd into the client/frontend directory and run `npm install`
7. run `npm run dev` to start the React(vite) development server
8. type `localhost:5000` in the browser to view the application
9. type `localhost:5000/api/v1/user/all` in the browser to view users. this makes sure the backend is working

### or set up the project from scratch ➡️

## Backend Setup

1. Create a new directory for the project
2. Initialize the project with npm

```bash
npm init -y
```

3. Install dependencies and devDependencies
  - Dependencies
    - Express
    - Zod
    - Dotenv
    - UUID
- DevDependencies
  - Typescript
  - Ts-Node
  - Nodemon
  - @types/express
  - @types/node

```bash
npm install express zod dotenv uuid
```
```bash
npm install -D typescript ts-node nodemon @types/express @types/node
```

> [!IMPORTANT]
> `ts-node` is required to run **typescript** files in **node** **environment** and for the `nodemon`
> to work with **typescript** files.
> add the `.env` file

4. Create a `server` directory in the root of the project
5. Initialize the project with typescript `tsconfig.json` file

```bash
npx tsc --init
```

6. Change the `outDir` in `tsconfig.json` to `./build` and `rootDir` to `./server`

```json
{
  "outDir": "./build",
  "rootDir": "./server",
  "baseUrl": "./"
}
```
7. add the following scripts to the `package.json` file

```json
"scripts": {
  "dev": "nodemon server/index.ts",
  "build": "npx tsc",
  "start": "node build/index.js"
}
```

8. Configure the path aliases in the `tsconfig.json` file

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["server/*"],
      "@shared/*": ["server/shared/*"],
      "@lib/*": ["server/lib/*"]
    }
  }
}
```
> The path aliases are used to import files in the project
> `import { someFunction } from '@/lib/someFunction';`

> The `shared` directory is used to store shared functions and types like `zod schemas` and `types` so that we can use them with the frontend without code duplication.

9. Create an `index.ts` file in the `server` directory and add the following code

```typescript
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

10. Run the development server

```bash
npm run dev
```

11. you should see `Server running on port 5000` in the console


## Frontend Setup

1. Run the following command in the root directory to create a React app

```bash
npx create-vite@latest frontend
```

2. cd into the `frontend` directory and run `npm install` to install the dependencies

```bash
cd frontend
npm install
```

3. Install the `tailwindcss and postcss dependencies`

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. Add the paths to all of your template files in your `tailwind.config.js` file.

```javascript
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

5. Add the `@tailwind directives` for each of Tailwind’s layers to your `./src/index.css` file.
    
 ```css
    @tailwind base; 
    @tailwind components;
    @tailwind utilities;
 ```

6. Start using **Tailwind’s utility classes** to style your content. In `App.tsx` file

```tsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

7. Run your build process with npm run dev.

```bash 
npm run dev
```

### Configure the frontend to work with the backend E.g. `shared directory`

1. Edit `tsconfig.json` file in the frontend directory

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@shared/*": ["../server/shared/*"]
    }
  }
}
```

2. Edit `tsconfig.app.json` file in the frontend directory

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@shared/*": ["../server/shared/*"]
    }
  }
}
```

3. Add the following code to the `vite.config.ts` file in the frontend directory

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../server/shared')
    }
  }
});
```

4. Install this `DevDependency` in the frontend directory (so you can import "path" without an error)

```bash
npm install -D @types/node
```

> Now you can import shared functions and types from the backend to the frontend without code duplication.


```typescript
// frontend/src/App.tsx
import { someFunction } from '@shared/someFunction';
```
> from the backend to the frontend like above

5. Run the development server

```bash
npm run dev
```

6. type `localhost:5173` in the browser to view the application




