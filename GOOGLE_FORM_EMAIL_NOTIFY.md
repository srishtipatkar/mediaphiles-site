# Get an email at info@mediaphiles.in for every form submission

The lead form submits directly to your Google Form (no backend server involved),
so notifications have to be set up on the Google Form side.

## Steps

1. Open the Google Form in your browser (the one at
   `docs.google.com/forms/d/e/1FAIpQLSdHmNXLZJI7fgrb0jJ6WFxkKL_mu6JVs-miOoOq-6Evs-a3Hw`).
   If you don't have the edit link handy, it's the same form your homepage
   Contact form and this audit form both write into.

2. Click the **three-dot menu** (top right) → **Script editor**
   (or: **Extensions → Apps Script** if you're viewing the linked Google Sheet instead).

3. Delete anything in the editor and paste this:

   ```javascript
   function onFormSubmitNotify(e) {
     var itemResponses = e.response.getItemResponses();
     var lines = [];
     itemResponses.forEach(function (item) {
       lines.push(item.getItem().getTitle() + ': ' + item.getResponse());
     });

     MailApp.sendEmail({
       to: 'info@mediaphiles.in',
       subject: 'New Instagram Audit lead',
       body: lines.join('\n')
     });
   }
   ```

4. Click the **clock icon** (Triggers) in the left sidebar → **+ Add Trigger**.
   - Choose function: `onFormSubmitNotify`
   - Event source: **From form**
   - Event type: **On form submit**
   - Save.

5. Google will ask you to authorize the script (it needs permission to send email
   as you) — click through the consent screen once.

6. Submit a test entry through the site and confirm the email arrives at
   info@mediaphiles.in.

That's it — every new response will now trigger an email automatically, no code
changes needed on the website itself.
