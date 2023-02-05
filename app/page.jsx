import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function HomePage() {
  return (
    <main>
      <div>
        <h1>Esta es nuestra app por ahora</h1>
      </div>
    </main>
  );
}
