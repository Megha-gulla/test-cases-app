import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo=jest.fn()

test('should render input', () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  expect(inputElement).toBeInTheDocument();
});

//event testing
test('should be able to type in to input', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement,{ target:{value:'new item added'}})
    expect(inputElement.value).toBe('new item added');
  });

//trigger event using testing library
  test('should have empty input when add button is clicked', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement=screen.getByRole('button',{ value: '/add/i'})
    fireEvent.change(inputElement,{ target:{value:'new item added'}})
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe('');
  });