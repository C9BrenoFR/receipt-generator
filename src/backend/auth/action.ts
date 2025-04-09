import { Credentials } from "@/types/credentials";
import bcrypt from "bcrypt";
import prisma from "@/lib/database";

export async function verifyCredentials(credentials: Credentials|undefined){
    if(!credentials || !credentials.email || !credentials.password)
        throw new Error("Invalid credentials")
    const user = await prisma.user.findUniqueOrThrow({
        where:{
            email: credentials?.email,
        }
    });

    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
    if (!isPasswordValid)
        throw new Error("Invalid credentials");

    return user;
}