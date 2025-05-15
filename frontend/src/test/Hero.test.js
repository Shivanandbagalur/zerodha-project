import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";

//Test Suite ->(we can write individual or multiple tests)
describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "mediaimages/homeHero.png");
  });

  test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", { name: "Signup Now" });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass(" btn-primary");
  });
});
