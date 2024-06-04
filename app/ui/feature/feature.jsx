import SubscribeForm from '../subscribeForm/subscribeForm'
import clsx from 'clsx'
import styles from './feature.module.scss';


function Feature() {
  return (
    <section className={clsx(`full-width`, styles.feature)}>
      <div className='container'>
        <div className={styles.featureInner}>
          <div>
            <h2>SUBSCRIBE TO MAILING LIST</h2>
            <SubscribeForm />
          </div>
          <div>
          <iframe className={styles.spotify} src="https://open.spotify.com/embed/artist/1yoZuH2j43vVSWsOwYuQyn?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;