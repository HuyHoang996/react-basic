import logo from './logo.svg';
import './App.scss';
// import MyComponent from './example/MyComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// import BookComponent from './Books/BookComponent';
// import ListTodo from './Todos/ListTodo';
import StudentComponent from './Students/StudentsComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple Todo App with React
        </p>

        {/* <MyComponent /> */}
        {/* <ListTodo /> */}
        {/* <BookComponent /> */}
        <StudentComponent />
      </header>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
