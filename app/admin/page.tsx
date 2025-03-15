import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
import { isAdmin } from "@/lib/admin";

const App = dynamic(() => import("./app"), { ssr: !!false });

const AdminPage = async () => {
  const isUserAdmin = await isAdmin(); // Асинхронный вызов

  if (!isUserAdmin) {
    redirect("/"); // Редирект сразу на сервере
  }

  return <App />;
};

export default AdminPage;