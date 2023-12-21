import Hero from "../components/Hero";
import Card from "../components/Card";

function HomepageView() {
  return (
    <>
      <main>
        <div className="container mx-auto px-4 pb-6 pt-4">
          <Hero />
        </div>
        <div className="container mx-auto grid justify-items-center gap-10 px-4 pb-5 pt-2 md:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </>
  );
}

export default HomepageView;
