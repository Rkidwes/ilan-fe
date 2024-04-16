import styles from "../page.module.scss";
import bookingStyles from "./bookings.module.scss";
import btnStyles from '../ui/base/button/button.module.scss';
import Link from "next/link"
import clsx from 'clsx'

export default function Bookings() {
  return (
  <main id={styles.main} style={{backgroundImage: "url('https://www.ilanbluestone.com/themes/ilan/img/new/bg-bookings.jpg')"}}>
    <div className="container">
      <div className={styles.content}>
        <h1>Bookings</h1>
        <p className={styles.hero}>For enquiries, please fill in the form below.</p>

        <form id="Form_BookingForm" className={bookingStyles.bookingForm} action="/bookings/BookingForm" method="post" enctype="application/x-www-form-urlencoded" class="ajax-action form-booking" novalidate="novalidate">
          <p id="Form_BookingForm_error" class="message " style={{ display: 'none' }}></p>
          <fieldset>
            <div id="Name" class="field text nolabel">
              <div class="middleColumn">
                <input type="text" name="Name" class="text nolabel" id="Form_BookingForm_Name" required="required" aria-required="true" placeholder="Enter your name" />
              </div>
            </div>

            <div id="Email" class="field email text nolabel">
              <div class="middleColumn">
                <input type="email" name="Email" class="email text nolabel" id="Form_BookingForm_Email" required="required" aria-required="true" placeholder="Enter your email address" />
              </div>
            </div>

            <div id="Phone" class="field text nolabel">
              <div class="middleColumn">
                <input type="text" name="Phone" class="text nolabel" id="Form_BookingForm_Phone" required="required" aria-required="true" placeholder="Enter your telephone" />
              </div>
            </div>
          
            <div id="Event" class="field text nolabel">
              <div class="middleColumn">
                <input type="text" name="Event" class="text nolabel" id="Form_BookingForm_Event" required="required" aria-required="true" placeholder="Enter the name of the event" />
              </div>
            </div>
  
            <div id="Message" class="field textarea nolabel">
              <div class="middleColumn">
                <textarea name="Message" class="textarea nolabel" id="Form_BookingForm_Message" placeholder="Enter any additional information here" rows="5" cols="20"></textarea>
              </div>
            </div>
  
            <input type="hidden" name="Extra" class="hidden nolabel" id="Form_BookingForm_Extra" />
            <input type="hidden" name="SecurityID" value="7e038aca8ac09257c34240db1c2a6393410fee27" class="hidden" id="Form_BookingForm_SecurityID" />
          </fieldset>

          <div class="Actions">
            <button className={clsx(btnStyles.btn, btnStyles.btnCta)} type="submit" name="action_SubmitBookingForm" value="Send Booking Enquiry" id="Form_BookingForm_action_SubmitBookingForm"><span>Send Booking Enquiry</span></button>
          </div>
        </form>       

      </div>
    </div>
  </main>
  );
}
