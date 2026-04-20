import HomeHero from "../components/Home/HomeHero/HomeHero";
import NewArrivals from "../components/Home/NewArrivals/NewArrivals";
import Restock from "../components/Home/Restock/Restock";
export default function Home() {
  const newProducts = [
    {
      id: 1,
      category: "限定 / 聯名企劃",
      productName: "Monoverse",
      color: "米白",
      price: 3600,
      imageUrl: "../../../../public/NewArrivals/new-1.png",
    },
    {
      id: 2,
      category: "滑板鞋",
      productName: "PLATFORM 404",
      color: "深藍",
      price: 2600,
      imageUrl: "../../../../public/NewArrivals/new-2.png",
    },
    {
      id: 3,
      category: "限定 / 聯名企劃",
      productName: "URBAN FORCE",
      color: "淺褐色",
      price: 3200,
      imageUrl: "../../../../public/NewArrivals/new-3.png",
    },
    {
      id: 4,
      category: "限定 / 聯名企劃",
      productName: "Mode90",
      color: "深藍",
      price: 4000,
      imageUrl: "../../../../public/NewArrivals/new-4.png",
    },
  ];
  const restockItems = [
    {
      id: 1,
      category: "限定 / 聯名企劃",
      productName: "Melty Kiss",
      color: "粉嫩紫",
      price: 4000,
      imageUrl: "../../../../public/Restocks/MeltyKiss_LightPurple.png",
    },
    {
      id: 2,
      category: "滑板鞋",
      productName: "PLATFORM 404",
      color: "深邃藍",
      price: 2600,
      imageUrl: "../../../../public/Restocks/platform404_darkblue.png",
    },
    {
    id: 3,
    category: "慢跑鞋",
    productName: "R:NUER",
    color: "淺褐色",
    price: 4000,
    imageUrl: "../../../../public/Restocks/R_NUER_Plain.png",
  },
   {
    id: 4,
    category: "滑板鞋",
    productName: "BloomBlok",
    color: "米白",
    price: 3200,
    imageUrl: "../../../../public/Restocks/BloomBlok_White.png",
  },
  ];
  return (
    <>
      <HomeHero />
      <div className="row">
        <NewArrivals newProducts={newProducts} />
        <Restock restockItems={restockItems} />
      </div>
    </>
  );
}
