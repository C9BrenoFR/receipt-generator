import { Employee } from "@/types/employee";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import ReactPDF from "@react-pdf/renderer";
import { User } from "@prisma/client";
import ReceiptPDF from "../pdf/receipt";
import { useState } from "react";

interface ReceiptProps {
  employees: Employee[];
  user: User;
}

export default function Receipt({ employees, user }: ReceiptProps) {
  const [selectedEmployee, setSelectedEmployee] = useState("");

  async function handleGenerateReceipt(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      employee: employees.find(employee => employee.id === Number(selectedEmployee)),
      data: (formData.get("data") as string) || "",
      user: user,
    };
    console.log(data)

    // Gera o PDF como um blob
    const blob = await ReactPDF.pdf(<ReceiptPDF {...data} />).toBlob();

    // Cria uma URL para o blob e abre em uma nova aba
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  }

  return (
    <div className="h-5/6 w-full flex items-center justify-center">
      <form
        onSubmit={handleGenerateReceipt}
        className="bg-cards w-[60%] h-[80%] shadow-XXL rounded-lg flex flex-col justify-center p-4 gap-1"
      >
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth sx={{ gap: 1 }}>
            <InputLabel id="demo-simple-select-label">Funcionário</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="employee"
              name="employee"
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
            >
              <MenuItem value="">--Selecione um funcionário--</MenuItem>
              {employees.map((employee) => (
                <MenuItem key={employee.id} value={employee.id}>
                  {employee.name}
                </MenuItem>
              ))}
            </Select>
            <TextField name="data" id="data" label="Local e Data" variant="outlined" />
          </FormControl>
        </Box>
        <Button sx={{ width: 80 }} type="submit" variant="outlined">
          Gerar
        </Button>
      </form>
    </div>
  );
}