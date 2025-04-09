import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("password", 10); 

  const user = {
    name: "user",
    email: "user@test.com",
    password: hashedPassword,
    address: "address example",
    cpf: "111.111.111-11"
  };

  await prisma.user.create({
    data: user,
  });

  await prisma.$disconnect();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });