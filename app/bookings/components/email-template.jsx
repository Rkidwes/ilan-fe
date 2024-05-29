import * as React from 'react';

export const EmailTemplate = ({
  name,
  email,
  phone,
  event,
  details
}) => (

  <div>
    <h1>You have received a new enquiry.</h1>
    <p style={{fontSize: '16px'}}>The details are as follows:</p> 

    <div style={{ border: '1px solid #333', padding: '12px', marginTop: '24px'}}>

      <table style={{fontSize: '14px'}}>
        {name && (<tr>
          <th align='left' style={{ padding: '4px 8px 4px 0'}}>Name:</th>
          <td style={{ padding: '4px 8px 4px 0'}}>{name}</td>
        </tr>)}
        {email && (<tr>
          <th align='left' style={{ padding: '4px 8px 4px 0'}}>Email:</th>
          <td style={{ padding: '4px 8px 4px 0'}}>{email}</td>
        </tr>)}
        {phone && (<tr>
          <th align='left' style={{ padding: '4px 8px 4px 0'}}>Telephone:</th>
          <td style={{ padding: '4px 8px 4px 0'}}>{phone}</td>
        </tr>)}
        {event && (<tr>
          <th align='left' style={{ padding: '4px 8px 4px 0'}}>Event Name:</th>
          <td style={{ padding: '4px 8px 4px 0'}}>{event}</td>
        </tr>)}
        {details && (<tr>
          <th align='left' style={{ padding: '4px 8px 4px 0'}}>Additional Information:</th>
          <td style={{ padding: '4px 8px 4px 0'}}>{details}</td>
        </tr>)}
      </table>

    </div> 
  </div>

);