
import styles from './BrandAbout.module.scss';
import aboutImage from '../../../assets/BrandStory/BrandAbout.webp';
export default function BrandAbout() {
  return (
    <>
      <section className={`${styles.about} mb-48`}>
        <img src={aboutImage} alt="" />
        <h4 className='h4 mb-24'>品牌簡介</h4>
        <p className='h5 mb-16 text-primary-400'>URBANSTEP 是來自台灣的街頭機能鞋品牌，致力於打造「風格與功能並存」的鞋履體驗。</p>
        <p className='mb-16'>在城市與日常的交錯中，我們看見了步伐的力量。URBNSTEP 誕生於一群設計師與文化觀察者的交會點——一個相信風格應該來自「真實場景」而非伸展台的團隊。從都市的清晨街角，到午後光影灑落的人行道，我們捕捉的是那些不被刻意編排的時刻，那些用一雙鞋踏出的態度與節奏。每一款鞋的誕生，不只是設計與工藝的結晶，更是一段來自城市靈感的延伸，我們相信：鞋，是穿在腳上的語言。</p>
        <p className='mb-48'>URBANSTEP 的名字來自 Urban + Step，代表著我們對每一個走進城市生活的人致敬。我們不追逐潮流，我們關注輪廓、材質、穿著者的心境與身型，創造能陪伴你走進自我節奏的經典之作。選用高品質麂皮、織物與天然橡膠大底，並與獨立插畫家、攝影師合作，打造具有街頭詩意的形象風格。URBNSTEP 相信，美不是炫耀，而是由內而外的呼吸——一雙鞋，剛好說出你心中的樣子。</p>
      </section>
    </>
  );
}

