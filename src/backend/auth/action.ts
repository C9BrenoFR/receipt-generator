import { Credentials } from "@/types/credentials";
import bcrypt from "bcrypt";
import prisma from "@/lib/database";
import { Employee, User } from "@prisma/client";

export async function verifyCredentials(credentials: Credentials|undefined): Promise<User>{
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

export async function getEmployess(email:string): Promise<Employee[]>{
    const user = await prisma.user.findUniqueOrThrow({
        where:{
            email: email,
        }
    });

    const employess = await prisma.employee.findMany({
        where: {
            userId: user.id
        }
    })

    return employess
}

export async function getUser(email:string): Promise<User>{
    const user = await prisma.user.findUniqueOrThrow({
        where:{
            email: email,
        }
    });

    return user
}