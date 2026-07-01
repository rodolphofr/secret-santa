<div align="center">
  <img src="./public/images/logo.png" alt="Secret Santa" width="360" />

  <h1>Secret Santa</h1>

  <p>
    A web application to organize Secret Santa draws in a simple, fast, and fun way.
  </p>

  <p>
    <img alt="React" src="https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react&logoColor=000" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-4.6.2-3178C6?style=for-the-badge&logo=typescript&logoColor=fff" />
    <img alt="Create React App" src="https://img.shields.io/badge/Create%20React%20App-5.0.0-09D3AC?style=for-the-badge&logo=create-react-app&logoColor=fff" />
    <img alt="Tests" src="https://img.shields.io/badge/Tests-React%20Testing%20Library-E33332?style=for-the-badge&logo=testing-library&logoColor=fff" />
  </p>
</div>

---

## 📌 About the project

**Secret Santa** is a front-end application built with **React** and **TypeScript** to make it easier to organize a Secret Santa game.

With this application, users can add participants, validate duplicated names, start the draw only when there are enough participants, and allow each person to see only their own Secret Santa result.

The draw happens locally in the browser, without a backend or external persistence.

---

## ✨ Features

* ✅ Add participants
* ✅ Validate empty names
* ✅ Validate duplicated participants
* ✅ Remove participants from the list
* ✅ Enable the draw only with at least 3 participants
* ✅ Protected route to prevent direct access to the result page without participants
* ✅ Random draw using a shuffled list
* ✅ Temporary result display to keep the surprise
* ✅ Automated tests with React Testing Library

---

## 🧠 How the draw works

The application shuffles the list of participants and creates a circular relationship between them:

```txt
Participant A → Participant B
Participant B → Participant C
Participant C → Participant A
```

This way, each participant draws another person from the list, and nobody draws themselves.

---

## 🛠️ Technologies used

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [React Router DOM](https://reactrouter.com/)
* [Formik](https://formik.org/)
* [Yup](https://github.com/jquense/yup)
* [Recoil](https://recoiljs.org/)
* [just-shuffle](https://www.npmjs.com/package/just-shuffle)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [Create React App](https://create-react-app.dev/)

---

## 🚀 How to run the project

### 1. Clone the repository

```bash
git clone https://github.com/your-username/secret-santa.git
```

### 2. Access the project folder

```bash
cd secret-santa
```

### 3. Install the dependencies

```bash
npm install
```

### 4. Run the application

```bash
npm start
```

The application will be available at:

```txt
http://localhost:3000
```

---

## 🧭 Application flow

1. The user accesses the home page.
2. The user adds the participants' names.
3. The application prevents empty or duplicated names.
4. With at least 3 participants, the button to start the game is enabled.
5. Each participant selects their own name.
6. When clicking **Draw**, the application temporarily reveals who their Secret Santa is.
7. After a few seconds, the result disappears from the screen.

---

## 🔒 Important notes

* This is a project to study and play with some React concepts.
* This project does not have a backend.
* Data is stored only in memory during the current session.
* If the page is refreshed, the participants list is lost.
* The draw is performed locally in the browser.

---

## 💡 Possible future improvements

* Persist participants in `localStorage`
* Add a confirmation screen before the draw
* Create an option to restart the game
* Add draw restrictions, such as preventing couples or close relatives from drawing each other
* Send the result by email or WhatsApp
* Create a more refined responsive layout for mobile devices

---

<div align="center">
  <p>🎁 Let the game begin!</p>
</div>
