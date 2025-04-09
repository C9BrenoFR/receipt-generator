import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("password", 10); 

  const user = {
    name: "user",
    email: "user@test.com",
    password: hashedPassword,
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