import { Employee } from "@/types/employee"
import List from "./list/list"

interface EmployeesProps{
    employees: Employee[]
}

export default function Employees({employees} : EmployeesProps){
   return(
    <div className="h-5/6 w-full flex items-center justify-center">
        <div className="bg-cards w-[60%] h-[80%] shadow-XXL rounded-lg flex justify-center overflow-auto">
            <List employees={employees}/>
        </div>
    </div>
   )
}