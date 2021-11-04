import './styles.css';

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2 onClick={() => (window.location.href = 'hello.html')}>
        Start editing to see some magic happen!
      </h2>
      <a href="./hello.html">Click here</a>
    </div>
  );
}
