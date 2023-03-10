import logo from './logo.svg';
import './App.css';
import ToDorowitem from './Components/ToDorowitem'

function App() {
  return (
    <div className = 'mt-5 container'>
      <div className = 'card'>
        <div className = 'card-header'>
          Your Todo's 
        </div>
        <div className = 'card-body'>
          <table className = 'table table-hover'>
            <thead>
              <tr>
                <th scope = 'col'>#</th>
                <th scope = 'col'>Description</th>
                <th scope = 'col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <ToDorowitem/>
              <tr>
                <th scope = 'row'>2</th>
                <td>Getting haircut</td>
                <td>Eric</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
