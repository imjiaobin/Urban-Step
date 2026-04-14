import BrandHero from "../components/BrandStory/BrandHero";
import BrandIntro from "../components/BrandStory/BrandIntro";
import BrandAbout from "../components/BrandStory/BrandAbout";
import BrandHistory from "../components/BrandStory/BrandHistory";
import BrandValues from "../components/BrandStory/BrandValues";
import BrandStories from "../components/BrandStory/BrandStories";
export default function BrandStory() {
  return (
    <>
      <BrandHero />
      <div className="container">
        <BrandIntro />
        <BrandAbout />
        <BrandHistory />
        <BrandValues />
        <BrandStories />
      </div>
    </>
  );
}
