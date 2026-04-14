import styles from './BrandHistory.module.scss';
export default function BrandHistory(){
    return<>
        <div className={`${styles.history} mb-48`}>
            <h4 className='h4 mb-24'>品牌歷程</h4>
            <ul className='mb-48'>
                <li className='mb-12'><span>2019</span>URBNSTEP 在台北東區的創意工作室誕生。</li>
                <li className='mb-12'><span>2021</span>首款【Urban Flow 系列】誕生，結合針織鞋面與城市靈感。</li>
                <li ><span>2025</span>永續材料：選用環保合成皮革與可回收包裝</li>
            </ul>
        </div>
    </>
}