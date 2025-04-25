import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("renders header element by heading text", () => {
  render(<Header title="Todo List" />);
  const headerElement = screen.getByText(/todo list/i);
  expect(headerElement).toBeInTheDocument();
});

// test('renders header element by role', () => {
//     render(<Header title="Todo List"/>);
//     const headerElement = screen.getByRole('heading');
//     expect(headerElement).toBeInTheDocument();
//   });

test("renders header element by role if we have two header in same component", () => {
  render(<Header title="Todo List" />);
  const headerElement = screen.getByRole("heading", { name: "Todo List" });
  expect(headerElement).toBeInTheDocument();
});

test("renders header element by title", () => {
  render(<Header title="Todo List" />);
  const headerElement = screen.getByTitle("Heading");
  expect(headerElement).toBeInTheDocument();
});

test('renders header element by test-id', () => {
    render(<Header title="Todo List"/>);
    const headerElement = screen.getByTestId('header-1');
    expect(headerElement).toBeInTheDocument();
  });

  //element by heading text using finby
  test("renders header element by heading text using finby", async () => {
    render(<Header title="Todo List" />);
    const headerElement = await screen.findByText(/todo list/i);
    expect(headerElement).toBeInTheDocument();
  });

//element by heading text using queryBy
test("renders header element by heading text using queryBy", () => {
    render(<Header title="" />);
    const headerElement = screen.queryByText(/todo/i);
    expect(headerElement).not.toBeInTheDocument();
  });

  test("renders header element by heading text using getallbyrole", () => {
    render(<Header title="" />);
    const headerElements = screen.getAllByRole('heading');
    expect(headerElements.length).toBe(2);
  });