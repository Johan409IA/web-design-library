import { existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { spawn } from "node:child_process";

const devOutputPath = resolve(".next", "dev");

if (existsSync(devOutputPath)) {
  rmSync(devOutputPath, { recursive: true, force: true });
  console.log("[dev] Caché de desarrollo de Next.js limpiada.");
}

const packageManager = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const child = spawn(packageManager, ["exec", "next", "dev"], {
  stdio: "inherit",
  shell: false,
});

child.on("error", (error) => {
  console.error("[dev] No se pudo iniciar Next.js:", error.message);
  process.exitCode = 1;
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exitCode = code ?? 1;
});
