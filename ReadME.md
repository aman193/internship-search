```
npm install
npm run dev
```

- user profession can be either student or recruiter.
- all schemas can be etended as required fields can be added.

**User**

- User can register and login -> /register, /login
- User can create and edit profile -> /createprofile, /editprofile

**Internship**

- only recuiter can post and edit an internship. -> /createinternship, /editinternship
- recruiter can all internship posted by him -> /myinternship
- user can view all internships -> /internships
- user can apply for internships -> /applyforinternship
- When a user aplies for internship an email will be sent to the recruiter.
- For now, cover letter and resume fields are in string format can be extended to file.

  **NodeMailer used for sending mails**

  **dev.js file is not pushed to github for security purpose as it contains my real email and password used for nodemailer**

  **Communication**

  - for now communication is done by simply adding value in mesage field of internship.
  - can be done by using router -> /sendmessage
  - it contains 2 fields - 1. id of the user, 2. message
  - can be extend furthure using socket.io for realtime conversation.
