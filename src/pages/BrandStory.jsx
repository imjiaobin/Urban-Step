import BrandHero from "../components/BrandStory/BrandHero/BrandHero";
import BrandIntro from "../components/BrandStory/BrandIntro/BrandIntro";
import BrandAbout from "../components/BrandStory/BrandAbout/BrandAbout";
import BrandHistory from "../components/BrandStory/BrandHistory/BrandHistory";
import BrandValues from "../components/BrandStory/BrandValues/BrandValues";
import BrandStories from "../components/BrandStory/BrandStories/BrandStories";
export default function BrandStory() {
  return (
    <>
      <BrandHero />
      <div className="container">
        <div className="row justify-center">
          <BrandIntro />
          <BrandAbout />
          <BrandHistory />
          <BrandValues />
          <BrandStories />
        </div>
      </div>
    </>
  );
}
