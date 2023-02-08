import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de Listado de Tareas */}
        <TaskListComponent />
        {/* Componente de Listado de Contactos */}
        <ContactListComponent />
      </header>
    </div>
  );
}

export default App;
