import HomeHero from "../components/Home/HomeHero/HomeHero";
import NewArrivals from "../components/Home/NewArrivals/NewArrivals";
import Restock from "../components/Home/Restock/Restock";
import Collab from "../components/Home/Collab/Collab";
import Categories from "../components/Home/Categories/Categories";
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
  const categoryList = [
    { id: 1, name: "慢跑鞋", engName:'URBAN RUNNER', imageUrl: '../../../../public/Categories/URBAN RUNNER.png'},
    { id: 2, name: "滑板鞋", engName:'STREET MODE', imageUrl: '../../../../public/Categories/STREET MODE.png'},
    { id: 3, name: "厚底鞋", engName:'CHUNK DISTRICT', imageUrl: '../../../../public/Categories/CHUNK DISTRICT.png' },
    { id: 4, name: "聯名企劃", engName:'COLLAB ZONE', imageUrl: '../../../../public/Categories/COLLAB ZONE.png' },
    { id: 5, name: "限定款式", engName:'LIMITED', imageUrl: '../../../../public/Categories/LIMITED.png' },
  ];
  return (
    <>
      <HomeHero />
      <div className="row">
        <NewArrivals newProducts={newProducts} />
        <Restock restockItems={restockItems} />
        <Collab />
        <Categories categoryList={categoryList} />
      </div>
    </>
  );
}
