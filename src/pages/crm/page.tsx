import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>CRM Software | Agorapulse</title>
        <meta
          name="description"
          content="CRM Software untuk mengelola hubungan pelanggan dengan lebih efektif."
        />
        <meta name="og:title" content="CRM Software | Agorapulse" />
        <meta
          property="og:description"
          content="CRM Software. Tingkatkan manajemen pelanggan, optimalkan penjualan, dan bangun hubungan yang lebih kuat."
        />
      </Helmet>

      <main className="flex flex-col gap-10 pb-10 pt-24 max-w-[1400px] mx-auto">
        <section id="hero" className="px-5 flex flex-col md:flex-row">
          <h1>CRM PAGE</h1>
        </section>
      </main>
    </>
  );
}
