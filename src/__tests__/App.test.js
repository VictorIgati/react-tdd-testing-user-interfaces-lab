import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

describe("Portfolio App", () => {
  test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    render(<App />);
    
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
    
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image with appropriate alt text", () => {
    render(<App />);
    
    const profileImage = screen.getByRole("img", {
      name: /profile picture/i
    });
    
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute("src");
    expect(profileImage).toHaveAttribute("alt");
  });

  test("displays 'About Me' section heading", () => {
    render(<App />);
    
    const aboutHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
    
    expect(aboutHeading).toBeInTheDocument();
  });

  test("displays biography paragraph", () => {
    render(<App />);
    
    const bioParagraph = screen.getByText(/./i); // Matches any text content
    expect(bioParagraph.tagName).toBe("P");
    expect(bioParagraph).toBeInTheDocument();
  });

  test("displays GitHub and LinkedIn links", () => {
    render(<App />);
    
    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href");
  });
});