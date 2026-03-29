"use client";
// page
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Em `next dev` e no export estático não há proxy de locale.
 * Redireciona a raiz para o idioma padrão (com trailing slash alinhado ao next.config).
 */
export default function RootRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/pt/");
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-slate-950 px-4 text-center text-slate-400">
      <p className="text-sm">A redirecionar…</p>
      <Link href="/pt/" className="text-sm font-medium text-cyan-300 underline">
        Abrir em português
      </Link>
    </div>
  );
}
