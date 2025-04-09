import Login from "@/components/login/login";

interface PageProps {
  searchParams: Promise<{
    error?: string
  }>
}

export default async function Home({searchParams} : PageProps) {
  const param = await searchParams;

  return (<Login error={param.error} />);
}
