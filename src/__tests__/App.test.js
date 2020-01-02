import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act, Simulate } from 'react-dom/test-utils'
import App from '../App'

let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})
afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('Renders todos', () => {
  act(() => {
    render(<App />, container)
  })
  // console.log(container.textContent)
  expect(container.textContent).toContain('Practice the Piano')
})

it('Can change the input', () => {
  act(() => {
    render(<App />, container)
  })
  const input = container.querySelector('input')
  act(() => {
    Simulate.change(input, { target: { value: 'Practice some more' } })
  })
  expect(input.value).toBe('Practice some more')
})

it('Can add to list', () => {
  act(() => {
    render(<App />, container)
  })
  const button = container.querySelector('button')
  act(() => {
    Simulate.click(button)
  })
  const todos = container.querySelectorAll('h2')
  expect(todos.length).toBe(4)
})