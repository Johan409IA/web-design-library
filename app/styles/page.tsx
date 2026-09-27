import { Footer } from "@/components/library";
import { Header } from "@/components/site-header";
import { StylesIndex } from "@/components/styles-index";

export const metadata = {
  title: "Diseños — Web Design Library",
  description: "Diseños visuales aplicados sobre una plantilla web común.",
};

export default function StylesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <StylesIndex />
      </main>
      <Footer />
    </>
  );
}
