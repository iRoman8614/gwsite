import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

const divider = '/divider.png'
const Picture1 = '/Picture1.png'
const Discord = '/Discord.svg'
const Reddit = '/Reddit.svg'
const Telegram = 'Telegram.svg'
const Twitter = '/Twitter.svg'
const Youtube = '/Youtube.svg'
const Picture2 = '/Picture2.png'
const footer = '/footer.png'


export default function Home() {
  return (
      <main className={styles.main}>
          <div className={styles.navbar}>
              <nav className={styles.buttonSet}>
                  <Link className={styles.activelink} href="#">HOME</Link>
                  <Link className={styles.link} href='#'>telegram</Link>
                  <Link className={styles.link} href='#'>X (twitter)</Link>
                  <Link className={styles.link} href="#">roadmap(Coming Soon)</Link>
                  <Link className={styles.link} href="#">WhitePaper(Coming Soon)</Link>
              </nav>
          </div>
          <video width="100%" autoPlay loop muted controls>
              <source src="/gw_teaser.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <div className={styles.bg1}>
              <div className={styles.linkBlock}>
                  <div className={styles.linkDivider}>
                      <Divider />
                  </div>
                  <div className={styles.linkSet}>
                      <div className={styles.socialBorder}>
                          <Image src={Youtube} alt={'YT'} width={60} height={60} />
                      </div>
                      <div className={styles.socialBorder}>
                          <Image src={Telegram} alt={'TG'} width={60} height={60} />
                      </div>
                      <div className={styles.socialBorder}>
                          <Image src={Twitter} alt={'X'} width={60} height={60} />
                      </div>
                      <div className={styles.socialBorder}>
                          <Image src={Discord} alt={'Discord'} width={60} height={60} />
                      </div>
                      <div className={styles.socialBorder}>
                          <Image src={Reddit} alt={'Reddit'} width={60} height={60} />
                      </div>
                  </div>
                  <div className={styles.socialLabel}>Click to copy contact address</div>
              </div>
              <div className={styles.imgBlock1}>
                  <div className={styles.imgBlock1TopDivider}>
                      <Divider />
                  </div>
                  <Image className={styles.img1} src={Picture1} alt={''} width={1920} height={800} />
                  <div className={styles.imgBlock1BottomDivider}>
                      <Divider />
                  </div>
              </div>
              <div className={styles.textBlock1}>
                  {/*<div>*/}
                  {/*    <Image className={styles.gameScreen1} src={gameScreen} alt={''} width={430} height={840} />*/}
                  {/*</div>*/}
                  {/*<div>*/}
                  {/*    Welcome to GANG WARS — the ultimate PvP battle experience, now on Telegram! Step into a world where only the strongest survive, and the sharpest rise to the top.*/}
                  {/*    <br/>*/}
                  {/*    Farm in-game tokens, challenge rivals in thrilling*/}
                  {/*    PvP duels, and climb through the ranks to prove yourself in higher and fiercer leagues. Join a powerful gang and mark your territory in this brutal underworld.*/}
                  {/*</div>*/}
              </div>
          </div>
          <div className={styles.bg2}>
              <div className={styles.imgBlock2}>
                  <div className={styles.imgBlock2TopDivider}>
                      <Divider />
                  </div>
                  <Image className={styles.img2} src={Picture2} alt={''} width={1920} height={800} />
                  <div className={styles.imgBlock2BottomDivider}>
                      <Divider />
                  </div>
              </div>
              {/*<div>*/}
              {/*    <div>*/}
              {/*        But that’s just the beginning. Soon, you’ll be able to customize your character, making every battle personal and every victory sweeter. And as you progress, gear up to take on challenges where the stakes are real — battling for crypto rewards in a high-stakes showdown of skill.*/}
              {/*        <br/>*/}
              {/*        Are you ready to stake your claim in the streets?*/}
              {/*        Join Gang Wars and start building your legacy today.*/}
              {/*    </div>*/}
              {/*    <div>img</div>*/}
              {/*</div>*/}
              <div>
                  <Image src={footer} alt={''} width={1920} height={500} />
              </div>
          </div>
      </main>
  );
}

const Divider = () => (
    <Image className={styles.divider} src={divider} alt={''} width={1920} height={50} />
)

