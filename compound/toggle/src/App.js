import Toggle from './components/Toggle'

function App() {
  return (
    <Toggle onToggle={on => console.log(on)}>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Button />
    </Toggle>
  );
}

export default App;
