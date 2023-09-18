const Hello  = ({ children }) => (<div style={{ color: 'red' }}>{children}</div>);

const div = (
  <div>
    <Hello>Hello Programmers</Hello>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(div);

