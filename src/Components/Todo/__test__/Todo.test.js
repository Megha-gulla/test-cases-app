import { render, screen } from "@testing-library/react"
import Todo from "../Todo"

test('Integration testing',()=>{
    render(<Todo/>)
    const headerElement=screen.getByText(/todo/i)
    expect(headerElement).toBeInTheDocument();
})