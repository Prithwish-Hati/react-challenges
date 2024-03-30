import './App.css'
import ColorPicker from './components/ColorPicker'
import Counter from './components/Counter'
import DynamicList from './components/DynamicList'
import PasswordChecker from './components/PasswordChecker'

function App() {

  return (
    <main className='max-w-[1440px] w-full flex flex-col items-center px-16'>
      <h1 className='text-4xl font-bold my-8'>React Challenges</h1>
      <Counter />
      <DynamicList />
      <ColorPicker />
      <PasswordChecker />
    </main>
  )
}

export default App
