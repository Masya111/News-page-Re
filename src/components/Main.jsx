import New from "./New";
import PageTitle from "./PageTitle";
import TopPopular from "./TopPopular";
import retroPC from "../images/image-retro-pcs.jpg";
import laptop from "../images/image-top-laptops.jpg";
import gaming from "../images/image-gaming-growth.jpg";
export default function Main() {
  return (
    <main>
      <PageTitle />
      <New />
      <div className="popular-container">
        <TopPopular
          image={retroPC}
          alternative="Retro PC"
          number="01"
          title="Reviving Retro PCs"
          description="What happens when old PCs are given modern upgrades?"
        />
        <TopPopular
          image={laptop}
          alternative="Top laptops"
          number="02"
          title="Top 10 Laptops of 2022"
          description="Our best picks for various needs and budgets."
        />
        <TopPopular
          image={gaming}
          alternative="Hand throwing a controller"
          number="03"
          title="The Growth of Gaming"
          description="How the pandemic has sparked fresh opportunities."
        />
      </div>
    </main>
  );
}
