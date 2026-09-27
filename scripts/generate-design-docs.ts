import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  activeDesignSlug,
  designDefinitions,
} from "../designs/index.ts";
import { createDesignMarkdown } from "../lib/design-md.ts";

async function main() {
  const projectRoot = fileURLToPath(new URL("../", import.meta.url));
  const checkOnly = process.argv.includes("--check");
  const activeDefinition = designDefinitions.find(
    (definition) => definition.slug === activeDesignSlug,
  );

  if (!activeDefinition) {
    throw new Error(
      `El diseño activo "${activeDesignSlug}" no existe en el registro.`,
    );
  }

  const targets = designDefinitions.map((definition) => ({
    definition,
    filePath: path.join(
      projectRoot,
      "designs",
      definition.slug,
      "DESIGN.md",
    ),
  }));

  targets.push({
    definition: activeDefinition,
    filePath: path.join(projectRoot, ".stitch", "DESIGN.md"),
  });

  let hasOutdatedFiles = false;

  for (const { definition, filePath } of targets) {
    const expected = createDesignMarkdown(definition);

    if (checkOnly) {
      const current = await readFile(filePath, "utf8").catch(() => "");
      if (current !== expected) {
        hasOutdatedFiles = true;
        console.error(
          `DESIGN.md ausente o desactualizado: ${path.relative(projectRoot, filePath)}`,
        );
      }
      continue;
    }

    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, expected, "utf8");
    console.log(`Generado: ${path.relative(projectRoot, filePath)}`);
  }

  if (hasOutdatedFiles) {
    console.error(
      "Ejecuta `pnpm designs:generate` para actualizar los documentos.",
    );
    process.exitCode = 1;
  } else if (checkOnly) {
    console.log("Todos los DESIGN.md están actualizados.");
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
