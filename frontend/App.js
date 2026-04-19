import React, { useState } from "react";

export default function App() {
  const [interest, setInterest] = useState("");
  const [courses, setCourses] = useState([]);

  const getRecommendations = async () => {
    const res = await fetch("http://localhost:8080/api/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ interest })
    });
    const data = await res.json();
    setCourses(data);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>AI Course Recommendation Engine</h1>
      <input
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        placeholder="Enter your interest"
        style={{ padding: "10px", width: "300px" }}
      />
      <button onClick={getRecommendations} style={{ marginLeft: "10px" }}>
        Get Courses
      </button>

      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}
