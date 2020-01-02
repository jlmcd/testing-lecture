const { sum, sayHello } = require('../functions')

// ** BASIC TEST EXAMPLE ** //
test('sum of 1 & 2 should be 3', () => {
  expect(sum(1, 2)).toBe(3)
  // the 'expect' method gives us access to
  // other methods which validate return values
})

// We use the 'toBe' method to ensure the return value of
// sayHello() is the string 'hello'

test('sayHello says hello', () => {
  expect(sayHello()).toBe('hello')
})

// ** Checking the value of an object ** //
// 'toBe' doesn't work on objects or arrays, so we will use
// another method called 'toEqual'
test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

// ** Checking boolean values ** //
// There is both a 'toBeTruthy' and a 'toBeFalsy' method
// Note: these methods also evaluate other data types
test('Expect true to be truthy', () => {
  expect(true).toBeTruthy()
})

//Checking an array contains an item
let wishlist = ['Steinway', 'Bosendorfer', 'Yamaha', 'Fazioli']

test('Wishlist contains Steinway', () => {
  expect(wishlist).toContain('Steinway')
})

// ** GROUPING TESTS ** //

let bankAccount = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount
  },
  withdraw(amount) {
    this.balance -= amount
  }
}

// Grouping tests together
describe('Bank account methods and properties', () => {
  afterEach(() => {
    bankAccount.balance = 1000
  })
  test('Initial balance is 1000', () => {
    expect(bankAccount.balance).toBe(1000)
  })
  test('deposit should correctly alter balance', () => {
    bankAccount.deposit(2000)
    expect(bankAccount.balance).toBe(3000)
  })
  test('withdraw should correctly alter balance', () => {
    bankAccount.withdraw(2000)
    expect(bankAccount.balance).toBe(-1000)
  })
})
