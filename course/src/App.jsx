import VideoItem from './components/VideoItem'
import VideoList from './components/VideoList'
import './styles/App.css'

function App() {

  return (
    <div className="App">

      <VideoList title={'Hooks en React'}>
        <VideoItem
          title="React Hooks"
          description="React Hooks are a new feature in React 16.8. They let you use state and other React features without writing a class."
          // uploadDate={uploadDate}
          duration={2000}
        />
        <VideoItem
          title="How to use React Hooks"
          description="React Hooks are a new feature in React 16.8. They let you use state and other React features without writing a class."
          // uploadDate={uploadDate}
          duration={200}
        />
      </VideoList>
      <VideoList title={'Curso React'}>
        <VideoItem
          title="DOM Events"
          description="DOM Events are a new feature in React 16.8. They let you use state and other React features without writing a class."
          // uploadDate={uploadDate}
          duration={80}
        />
        <VideoItem
          title="HTML Forms"
          description="HTML Forms are a new feature in React 16.8. They let you use state and other React features without writing a class."
          // uploadDate={uploadDate}
          duration={2070}
        />
      </VideoList>
      <VideoList title={"HTML Course"}>

      </VideoList>
    </div>
  )
}

export default App
