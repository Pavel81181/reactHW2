import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Show from './components/visible';
import Timer from './components/timer';
import RefExample from './components/refExample';
import MessagesList from './components/list';
import TextInput from './components/text';
import ToDoList from './components/toDo';
import Timer2 from './components/timer2';
import CommentsList from './components/comments';

function App() {
  const userName = 'Pavel';
  return (
    <div className="App">
      <h1> Hello  {userName}</h1>
      <Counter/>
      <Show data = 'Text1'/>
      <Show data = 'Text2'/>
      <Timer />
      <Timer2 />
      <RefExample />
      <MessagesList />
      <TextInput/>
      <ToDoList />
      <CommentsList />
    </div>
  );
}

export default App;
