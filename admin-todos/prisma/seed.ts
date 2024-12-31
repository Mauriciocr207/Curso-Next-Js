import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async () => {
    await prisma.todo.deleteMany();
    await prisma.todo.createMany({
        data: [
            {description: "Piedra del alma"},
            {description: "Piedra del poder"},
            {description: "Piedra del tiempo"},
            {description: "Piedra de la mente"},
            {description: "Piedra de la realidad"},
            {description: "Piedra del espacio"},
            {description: "Guantelete del infinito"},
        ]
    })
})().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});