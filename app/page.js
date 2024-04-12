// import Image from "next/image";
import styles from "./page.module.scss";
import clsx from 'clsx'

import Notification from './ui/notification/notification'

export default function Home() {
  return (
    <main className={clsx(`fill-height`, `full-width`, `no-bg`, `${styles.mainContent}`)} styles={{ gridTemplateColumns: 'subgrid'}}>

      <Notification />

      <h1 style={{textWrap: 'balance'}}>I specialise in weight, body image and bariatric psychology as well as pain management, anxiety and depression.</h1>

      <div className="full-width" style={{ display: 'grid', gridColumn: 'full-width', gridTemplateColumns: 'subgrid', background: 'lightblue', height: '500px', alignItems: 'center' }}>
        {/* style={{ paddingInline: 0 }} */}
        <div className="quote-box" style={{width: '50%'}}>
          <blockquote className="quote">
            <span className="quote-sign">“</span>
            <p className="quote-text">In a day and age when we are constantly reminded of our shortfalls and exposed to images of what we ought to strive to achieve in terms of both our personal and professional aspirations, it is inevitable to succumb at times to a state of `mental malaise`.</p>
            <p className="quote-author">Dr Anna Abramowski, Counselling Psychologist BSc, MSc, MPhil, DPsych, CPsychol.</p>
          </blockquote>
        </div>
      </div>

      {/* <TestimonialList /> */}

    </main>
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>app/page.js</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore starter templates for Next.js.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
