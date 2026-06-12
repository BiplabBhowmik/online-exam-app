import questions from "./questions";
import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs
} from "firebase/firestore";

function App() {
  const [page, setPage] = useState("home");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(1800);
  const [results, setResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  useEffect(() => {
  if (page === "exam" && timeLeft > 0) {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }

  if (page === "exam" && timeLeft === 0) {
    setPage("result");
  }
}, [timeLeft, page]);
  useEffect(() => {
  if (page === "exam" && timeLeft > 0) {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }

  if (page === "exam" && timeLeft === 0) {
    setPage("result");
  }
}, [timeLeft, page]);

  const registerStudent = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Student Registered Successfully");
      setUser(userCredential.user);
      setPage("dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const loginStudent = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful");
      setUser(userCredential.user);
      setPage("dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const logoutUser = async () => {
    await signOut(auth);
    setUser(null);
    setPage("home");
    alert("Logged Out");
  };
  const saveResult = async () => {
  try {
    await addDoc(collection(db, "results"), {
      email: user?.email,
      score: score,
      totalQuestions: questions.length,
      percentage: ((score / questions.length) * 100).toFixed(2),
      submittedAt: new Date(),
    });

    alert("Result Saved Successfully");
  } catch (error) {
    console.log(error);
  }
};
const fetchResults = async () => {
  const querySnapshot = await getDocs(collection(db, "results"));

  const data = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  setResults(data);
};
const fetchAllResults = async () => {
  const querySnapshot = await getDocs(collection(db, "results"));

  const data = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  setAllResults(data);
};
  // Dashboard Page
  if (page === "dashboard") {
    return (
      <div
  style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    textAlign: "center",
    paddingTop: "100px",
  }}
>
        <h1>Student Dashboard</h1>

        <h3>Welcome</h3>
        <p>{user?.email}</p>

        <button
          onClick={() => setPage("exam")}
         style={{
  padding: "12px 25px",
  margin: "10px",
  border: "none",
  borderRadius: "10px",
  backgroundColor: "#ffffff",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px"
}}
        >
          Start Exam
        </button>

<br />

{results.map((result, index) => (
  <div
    key={index}
    style={{
      border: "1px solid gray",
      margin: "10px",
      padding: "10px",
    }}
  >
    <p>Email: {result.email}</p>
    <p>Score: {result.score}</p>
    <p>Percentage: {result.percentage}%</p>
  </div>
))}

        <br />

        <button
          onClick={logoutUser}
          style={{
            padding: "10px 20px",
            margin: "10px",
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  // Exam Page
  

 // Exam Page
if (page === "exam") {
  const question = questions[currentQuestion];

  return (
    <div
  style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    textAlign: "center",
    paddingTop: "50px",
  }}
>
      <h1>Online Exam</h1>
      <h2>
  Time Left: {Math.floor(timeLeft / 60)}:
  {(timeLeft % 60).toString().padStart(2, "0")}
</h2>

      <h2>
        Question {currentQuestion + 1} of {questions.length}
      </h2>

      <h3>{question.question}</h3>

      {question.options.map((option, index) => (
        <div key={index}>
          <button
            onClick={() => setSelectedAnswer(option)}
            style={{
              padding: "10px",
              margin: "5px",
              width: "300px",
            }}
          >
            {option}
          </button>
        </div>
      ))}
<p>Selected Answer: {selectedAnswer}</p>
      <br />

      <button
        onClick={() => {
          if (selectedAnswer === question.answer) {
            setScore(score + 1);
          }

          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer("");
          } else {
            setPage("result");
          }
        }}
      >
        Next
      </button>

      <button
        onClick={() => {
          if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
          }
        }}
        style={{ marginLeft: "10px" }}
      >
        Previous
      </button>
      <button
  onClick={() => {
    if (window.confirm("Are you sure you want to submit the exam?")) {
      setPage("result");
    }
  }}
>
  Submit 
</button>
    </div>
  );
  
}
// Result Page
if (page === "result") {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Exam Completed</h1>

      <h2>
        Your Score: {score} / {questions.length}
      </h2>
    <h3>
  Percentage: {((score / questions.length) * 100).toFixed(2)}%
    </h3>
    <h3>
  Grade: {
    ((score / questions.length) * 100) >= 90
      ? "A+"
      : ((score / questions.length) * 100) >= 80
      ? "A"
      : ((score / questions.length) * 100) >= 70
      ? "B"
      : ((score / questions.length) * 100) >= 60
      ? "C"
      : "D"
  }
</h3>

      <button
         onClick={async () => {
          await saveResult();
          setScore(0);
          setCurrentQuestion(0);
          setSelectedAnswer("");
          setTimeLeft(1800);
          setPage("dashboard");
          
        }}
      >
        Back To Dashboard
      </button>
    </div>
  );
}

  // Student Login Page
  if (page === "student") {
    return (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      color: "white",
      textAlign: "center",
      paddingTop: "100px",
    }}
  >
        <h1>Student Login / Register</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button
          onClick={registerStudent}
          style={{
            padding: "10px 20px",
            margin: "10px",
          }}
        >
          Register
        </button>

        <button
          onClick={loginStudent}
          style={{
            padding: "10px 20px",
            margin: "10px",
          }}
        >
          Login
        </button>

        <br />
        <br />

        <button onClick={() => setPage("home")}>Back</button>
      </div>
    );
  }

  // Admin Page
  if (page === "admin") {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Admin Login</h1>
        <input
  type="password"
  placeholder="Enter Admin Password"
  value={adminPassword}
  onChange={(e) => setAdminPassword(e.target.value)}
/>

<br />
<br />

<button
  onClick={() => {
    if (adminPassword === "admin123") {
      setAdminLoggedIn(true);
    } else {
      alert("Wrong Password");
    }
  }}
>
  Login
</button>
 {adminLoggedIn && (
  <>

  <button
  onClick={fetchAllResults}
  style={{
    padding: "10px 20px",
    margin: "10px",
  }}
  >
  Load All Results
  </button>

{allResults.map((result, index) => (
  <div
    key={index}
    style={{
      border: "1px solid gray",
      margin: "10px",
      padding: "10px",
    }}
  >
    <p>Email: {result.email}</p>
    <p>Score: {result.score}</p>
    <p>Percentage: {result.percentage}%</p>
  </div>
))}
</>
 )}

        <button onClick={() => setPage("home")}>Back</button>
      </div>
    );
  }

  // Home Page
  return (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      color: "white",
      textAlign: "center",
      paddingTop: "100px",
    }}
  >
      <h1>Online Exam App</h1>
      <h2>Welcome to Online Examination System</h2>

      <button
        onClick={() => setPage("student")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          fontSize: "16px",
        }}
      >
        Student Login
      </button>

      <br />

      <button
        onClick={() => {
  fetchResults();
  setPage("admin");
}}
        style={{
          padding: "10px 20px",
          margin: "10px",
          fontSize: "16px",
        }}
      >
        Admin Login
      </button>
    </div>
  );
}

export default App;