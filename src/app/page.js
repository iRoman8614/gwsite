'use client'
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import {useState} from "react";

const divider = '/divider.png'
const Picture1 = '/Picture1.png'
const Picture1mob = '/Picture1mob.png'
const Telegram = 'Telegram.svg'
const Twitter = '/Twitter.svg'
const Youtube = '/Youtube.svg'
const Picture2 = '/Picture2.png'
const Picture2mob = '/Picture2mob.png'
const footer = '/footer.png'
const screen1 = '/gameScreen1.png'
const screen2 = '/gameScreen2.png'
const window1 = '/window1.png'
const window1mob = '/window1mob.png'
const window2 = '/window2.png'
const window2mob = '/window2mob.png'


export default function Home() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };

  return (
      <main className={styles.main}>
          <div className={styles.navbar}>
              <div className={styles.mobileLine}>
                  <div className={styles.toggleButton} onClick={toggleNavbar}>
                      ☰
                  </div>
                  <div className={styles.mobileLinkSet}>
                      <div className={styles.socialBorder}>
                          <Image className={styles.socialImage} src={Youtube} alt={'YT'} width={60} height={60} />
                      </div>
                      <div className={styles.socialBorder}>
                          <Image className={styles.socialImage} src={Telegram} alt={'TG'} width={60} height={60} />
                      </div>
                      <div className={styles.socialBorder}>
                          <Image className={styles.socialImage} src={Twitter} alt={'X'} width={60} height={60} />
                      </div>
                  </div>
              </div>
              <nav className={`${styles.buttonSet} ${isNavbarVisible ? styles.visible : ''}`}>
                  <Link className={styles.activelink} href="#">HOME</Link>
                  <Link className={styles.link} href='#'>telegram</Link>
                  <Link className={styles.link} href='#'>X (twitter)</Link>
                  <Link className={styles.link} href="#">roadmap(Coming Soon)</Link>
                  <Link className={styles.link} href="#">WhitePaper(Coming Soon)</Link>
              </nav>
          </div>
          <video className={styles.videoBlock} width="100%" autoPlay loop muted controls>
              <source src="/gw_teaser.mp4?cache_bust=1" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <div className={styles.bg1}>
              <div className={styles.linkBlock}>
                  <div className={styles.linkDivider}>
                      <Divider />
                  </div>
                  <div className={styles.linkSet}>
                      <div className={styles.socialBorder}>
                          <Image className={styles.socialImage} src={Youtube} alt={'YT'} width={60} height={60} />
                      </div>
                      <div className={styles.socialBorder}>
                          <Image className={styles.socialImage} src={Telegram} alt={'TG'} width={60} height={60} />
                      </div>
                      <div className={styles.socialBorder}>
                          <Image className={styles.socialImage} src={Twitter} alt={'X'} width={60} height={60} />
                      </div>
                  </div>
                  <div className={styles.socialLabel}>Click to copy contact address</div>
              </div>
              <div className={styles.imgBlock1}>
                  <Image className={styles.img1} src={Picture1} alt={''} width={1920} height={800} />
                  <Image className={styles.img1mob} src={Picture1mob} alt={''} width={768} height={400} />
              </div>
              <div className={styles.textBlock1}>
                  <Image className={styles.window1bg} src={window1} alt={''} width={1920} height={1200} />
                  <div className={styles.window1container}>
                      <Image className={styles.window1image} src={screen1} alt={''} width={430} height={840} />
                      <div className={styles.window1text}>
                          Welcome to <a>GANG WARS</a> — the ultimate PvP battle experience, now on Telegram! Step into a world where only the strongest survive, and the sharpest rise to the top.
                          <br/>
                          <br/>
                          Farm in-game tokens, challenge rivals in thrilling
                          PvP duels, and climb through the ranks to prove yourself in higher and fiercer leagues. Join a powerful gang and mark your territory in this brutal underworld.
                      </div>
                  </div>
              </div>
          </div>
          <div className={styles.bg2}>
              <div className={styles.imgBlock2}>
                  <Image className={styles.img2} src={Picture2} alt={''} width={1920} height={800} />
                  <Image className={styles.img2mob} src={Picture2mob} alt={''} width={1920} height={800} />
              </div>
              <div className={styles.textBlock2}>
                  <Image className={styles.window2bg} src={window2} alt={''} width={1920} height={1100} />
                  <div className={styles.window2container}>
                      <div className={styles.window2text}>
                          But that’s just the beginning. Soon, you’ll be able to customize your character, making every battle personal and every victory sweeter. And as you progress, gear up to take on challenges where the stakes are real — battling for crypto rewards in a high-stakes showdown of skill.
                          <br/>
                          <br/>
                          Are you ready to stake your claim in the streets?
                          Join Gang Wars and start building your legacy today.
                      </div>
                      <Image className={styles.window2image} src={screen2} alt={''} width={430} height={830} />
                  </div>
              </div>
              <div className={styles.footer}>
                  <Image className={styles.footer} src={footer} alt={''} width={1920} height={500} />
              </div>
          </div>
      </main>
  );
}

const Divider = () => (
    <Image className={styles.divider} src={divider} alt={''} width={1920} height={50} />
)

