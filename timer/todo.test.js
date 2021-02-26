const fs = require('fs')
const html = fs.readFileSync('./index.html')
window.document.body.innerHTML = html
const {
  addTask
} = require('./index')

const createCloseButtons = jest.fn()
const tasks = document.getElementsByTagName('li')
const list = document.getElementsByTagName('ul')[0]
// add item
// add empty
// delete, check-off, on cypress
beforeEach(() => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
})
test('add an item', () => {
  document.getElementById('textInput').value = 'test Task'
  addTask(createCloseButtons)
  expect(tasks.length).toBe(1)
  expect(tasks[tasks.length - 1].childNodes[0].nodeValue).toBe('test Task')
})

test('add nothing', () => {
  document.getElementById('textInput').value = ''
  addTask(createCloseButtons)
  const tasks = document.getElementsByTagName('li')
  expect(tasks.length).toBe(0)
})