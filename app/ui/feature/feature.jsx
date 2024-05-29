import React from 'react'
import styles from './feature.module.scss';
import clsx from 'clsx'
import SubscribeForm from '../subscribeForm/subscribeForm'


function Feature() {
  return (
    <section className={clsx(`full-width`, styles.feature)}>
      <div className='container'>
        <div className={styles.featureInner}>
          <div>
            <h2>SUBSCRIBE TO MAILING LIST</h2>



            <SubscribeForm />



            {/* Best example <form className={styles.form}>
              <input type="email" name="Email" className="email text nolabel" id="Form_NewsletterForm_Email" required="required" aria-required="true" placeholder="Enter your email..." />
              <button type="submit" name="action_doNewsletterSubmit" value="Subscribe" className="action" id="Form_NewsletterForm_action_doNewsletterSubmit">
                <span>Subscribe</span>
              </button>
            </form> */}
            {/* <form id="Form_NewsletterForm" action="/home/NewsletterForm" method="post" enctype="application/x-www-form-urlencoded" className="ajax-action form-newsletter" novalidate="novalidate">
              <p id="Form_NewsletterForm_error" className="message " style={{ display: 'none' }}></p>
              <fieldset>
                <div id="Email" className="field email text nolabel">
                  <div className="middleColumn">
                    <input type="email" name="Email" className="email text nolabel" id="Form_NewsletterForm_Email" required="required" aria-required="true" placeholder="Enter your email..." />
                  </div>
                </div>
                <input type="hidden" name="Extra" className="hidden nolabel" id="Form_NewsletterForm_Extra" />
                <input type="hidden" name="SecurityID" value="4c33349a9a724632fba871aeee6b5f4704400dc5" className="hidden" id="Form_NewsletterForm_SecurityID" />
                <div className="clear"></div>
              </fieldset>
              <div className="Actions">	
                <button type="submit" name="action_doNewsletterSubmit" value="Subscribe" className="action" id="Form_NewsletterForm_action_doNewsletterSubmit">
                  <span>Subscribe</span>
                </button>
              </div>
            </form> */}
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


        {/* <p>Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum</p> */}