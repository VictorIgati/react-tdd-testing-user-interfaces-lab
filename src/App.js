import React from 'react';

function App() {
  return (
    <main className="portfolio">
      <h1>Hi, I'm Victor</h1>
      
      <img 
        src="https://via.placeholder.com/200" 
        alt="Profile Picture" // Changed to match test requirement
      />
      
      <h2>About Me</h2>
      
      <p>
        I am a passionate software developer with experience in React and modern web technologies.
        I love building user-friendly applications and learning new technologies.
      </p>
      
      <nav>
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {" | "}
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </main>
  );
}

export default App;