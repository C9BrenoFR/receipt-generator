import { Employee } from "@/types/employee"
import { User } from "@prisma/client"
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"

interface ReceiptPDFProps{
    user: User
    employee: Employee | undefined
    data: string
}

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4',
      padding: 30,
    },
    section: {
      marginBottom: 20,
    },
    justifiedText: {
      textAlign: 'justify',
      fontSize: 12,
      lineHeight: 1.5,
    },
    signatureSection: {
      marginTop: 40,
      alignItems: 'center',
    },
    signatureLine: {
      marginTop: 20,
      marginBottom: 5,
    },
    bold: {
      fontWeight: 'bold',
    },
  });
  
  

  export default function ReceiptPDF({ user, employee, data }: ReceiptPDFProps) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.justifiedText}>
              Eu, <Text style={styles.bold}>{employee?.name?.toUpperCase()}</Text>, portador(a) do CPF nº {employee?.cpf}, residente na {employee?.address}, declaro ter recebido nesta data o valor de <Text style={styles.bold}>R${employee?.salary}</Text>,
              de <Text style={styles.bold}>{user.name.toUpperCase()}</Text>, portador(a) do CPF nº {user.cpf}, residente na {user.address},
              referente ao <Text style={styles.bold}>PAGAMENTO DE PRESTAÇÃO DE SERVIÇO REFERENTE AO MÊS DA DATA DESTE DOCUMENTO</Text>.
            </Text>
          </View>
  
          <View style={styles.section}>
            <Text>E para maior clareza, afirmo o presente.</Text>
          </View>
  
          <View style={styles.signatureSection}>
            <Text>{data}</Text>
            <Text>{"\n\n"}</Text>
            <Text style={styles.signatureLine}>____________________________________________</Text>
            <Text style={styles.bold}>{employee?.name}</Text>
          </View>
        </Page>
      </Document>
    );
  }
  