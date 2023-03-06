```
npm install
npm run dev
```

- user profession can be either student or recruiter.

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
