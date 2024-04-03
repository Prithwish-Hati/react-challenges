import './App.css'
import ColorPicker from './components/ColorPicker'
import CountDown from './components/CountDown'
import Counter from './components/Counter'
import DynamicList from './components/DynamicList'
import DynamicMovieList from './components/DynamicMovieList'
import PasswordChecker from './components/PasswordChecker'
import UseCallbackHook from './components/hooks/UseCallbackHook'
import UseContextHook from './components/hooks/useContext/UseContextHook'
import UseMemoHook from './components/hooks/UseMemoHook'
import UseReducerHook from './components/hooks/UseReducerHook/UseReducerHook'
import ReduxCounter from './components/ReduxCounter'

function App() {

  return (
    <main className='max-w-[1440px] w-full flex flex-col items-center px-16'>
      <h1 className='text-4xl font-bold my-8'>React Challenges</h1>
      {/* <Counter />
      <DynamicList />
      <ColorPicker />
      <PasswordChecker />
      <CountDown />
      <DynamicMovieList /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseReducerHook /> */}
      <ReduxCounter />
    </main>
  )
}

export default App
