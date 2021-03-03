const fs = require('fs')
const html = fs.readFileSync('./index.html')
window.document.body.innerHTML = html

class LocalStorageMock {
  constructor () {
    this.store = {}
  }

  clear () {
    this.store = {}
  }

  getItem (key) {
    return this.store[key] || null
  }

  setItem (key, value) {
    this.store[key] = String(value)
  }

  removeItem(key) {
    delete this.store(key)
  }
}

global.localStorage = new LocalStorageMock

const {
  addTask,
  addSaved
} = require('./index')

const createCloseButtons = jest.fn()
const tasks = document.getElementsByTagName('li')
const list = document.getElementsByTagName('ul')[0]
// add item
// add empty
// delete, check-off, on cypress
beforeEach(() => {
  while (list.firstChild) {
    list.removeChild(list.firstChild)
    global.localStorage.clear()
  }
})
test('add an item', () => {
  document.getElementById('textInput').value = 'test Task'
  addTask(createCloseButtons)
  expect(tasks.length).toBe(1)
  expect(tasks[tasks.length - 1].childNodes[0].nodeValue).toBe('test Task')
  expect(JSON.parse(global.localStorage.getItem('tasks')).length).toBe(1)
  expect(JSON.parse(global.localStorage.getItem('tasks'))[0].completed).toBe(false)
  expect(JSON.parse(global.localStorage.getItem('tasks'))[0].desc).toBe('test Task')
})

test('add two items', () => {
  document.getElementById('textInput').value = 'test Task'
  addTask(createCloseButtons)
  document.getElementById('textInput').value = 'test Task 2'
  addTask(createCloseButtons)
  expect(tasks.length).toBe(2)
  expect(tasks[0].childNodes[0].nodeValue).toBe('test Task')
  expect(tasks[1].childNodes[0].nodeValue).toBe('test Task 2')
  const taskList = JSON.parse(global.localStorage.getItem('tasks'))
  expect(taskList.length).toBe(2)
  expect(taskList[0].completed).toBe(false)
  expect(taskList[0].desc).toBe('test Task')
  expect(taskList[1].completed).toBe(false)
  expect(taskList[1].desc).toBe('test Task 2')
})

test('add item, remove it from the DOM, and see if it regenerates using localstorage', () => {
  document.getElementById('textInput').value = 'test Task'
  addTask(createCloseButtons)
  expect(tasks.length).toBe(1)
  expect(tasks[tasks.length - 1].childNodes[0].nodeValue).toBe('test Task')
  expect(JSON.parse(global.localStorage.getItem('tasks')).length).toBe(1)
  expect(JSON.parse(global.localStorage.getItem('tasks'))[0].completed).toBe(false)
  expect(JSON.parse(global.localStorage.getItem('tasks'))[0].desc).toBe('test Task')
  while (list.firstChild) {
    list.removeChild(list.firstChild)
  }
  // check that task is removed from DOM
  expect(tasks.length).toBe(0)
  addSaved(createCloseButtons)
  // check that regeneration happened
  expect(tasks.length).toBe(1)
  expect(tasks[tasks.length - 1].childNodes[0].nodeValue).toBe('test Task')
  expect(JSON.parse(global.localStorage.getItem('tasks')).length).toBe(1)
  expect(JSON.parse(global.localStorage.getItem('tasks'))[0].completed).toBe(false)
  expect(JSON.parse(global.localStorage.getItem('tasks'))[0].desc).toBe('test Task')
})

test('add item, check it, remove it from the DOM, and see if it regenerates using localstorage', () => {
  document.getElementById('textInput').value = 'test Task'
  addTask(createCloseButtons)
  expect(tasks.length).toBe(1)
  expect(tasks[tasks.length - 1].childNodes[0].nodeValue).toBe('test Task')
  tasks[tasks.length-1].classList.toggle('checked')
  expect(tasks[tasks.length-1].classList.contains('checked')).toBe(true)
  const taskList = JSON.parse(global.localStorage.getItem('tasks'))
  taskList[0].completed = true;
  global.localStorage.setItem('tasks', JSON.stringify(taskList))
  expect(JSON.parse(global.localStorage.getItem('tasks')).length).toBe(1)
  expect(JSON.parse(global.localStorage.getItem('tasks'))[0].completed).toBe(true)
  expect(JSON.parse(global.localStorage.getItem('tasks'))[0].desc).toBe('test Task')
  while (list.firstChild) {
    list.removeChild(list.firstChild)
  }
  // check that task is removed from DOM
  expect(tasks.length).toBe(0)
  addSaved(createCloseButtons)
  // check that regeneration happened
  expect(tasks.length).toBe(1)
  expect(tasks[tasks.length - 1].childNodes[0].nodeValue).toBe('test Task')
  expect(JSON.parse(global.localStorage.getItem('tasks')).length).toBe(1)
  expect(JSON.parse(global.localStorage.getItem('tasks'))[0].completed).toBe(true)
  expect(JSON.parse(global.localStorage.getItem('tasks'))[0].desc).toBe('test Task')
  expect(tasks[tasks.length-1].classList.contains('checked')).toBe(true)
})


test('add nothing', () => {
  document.getElementById('textInput').value = ''
  addTask(createCloseButtons)
  const tasks = document.getElementsByTagName('li')
  expect(tasks.length).toBe(0)
  const taskList = JSON.parse(global.localStorage.getItem('tasks'))
  expect(taskList).toBe(null)
})
