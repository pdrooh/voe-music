import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-4">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <p className="text-xl mb-8">Página não encontrada</p>
        <Link href="/">
          <Button variant="neon">Voltar para Home</Button>
        </Link>
      </div>
    </div>
  );
}

