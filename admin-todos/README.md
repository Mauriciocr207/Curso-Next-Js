# Development
Levantar app en desarrollo

1. Base de datos
```Bash
docker compose up -d
```

2. Renombrar .env.template a .env y reemplazar las variables de entorno
3. Ejecuta el seeder para generar datos en la DB

# Prisma Commands
```Bash
npx prisma init
npx prisma migrate dev
npx prisma generate
npx prisma db seed #generate data in db
```

# Production

# Stage