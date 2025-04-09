
import { getEmployess, getUser } from "@/backend/auth/action";
import AuthPage from "@/components/auth_page/auth_page";
import { getServerSession } from "next-auth";

export default async function Page(){
    const session = await getServerSession();
    const employees = await getEmployess(String(session?.user?.email));
    const user = await getUser(String(session?.user?.email));

    const newEmployees = employees.map(employee => ({
        ...employee,
        salary: Number(employee.salary),
    }));

    return(<AuthPage user={user} session={session} employees={newEmployees}/>)
}