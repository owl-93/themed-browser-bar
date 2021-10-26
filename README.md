# Themed Browser Bar

A tiny React lib in TS for Changing mobile browser bar color to match your site theme. (Currently supported by Chrome in Android)

![Example](https://i.imgur.com/Tu0H29e.gif)

```shell
    npm install @owl-93/themed-browser-bar
```
or with yarn
```shell
    yarn add @owl-93/themed-browser-bar
```

## Usage

### Import the hook
```jsx
   import { useThemedBrowserBar } from '@owl-93/themed-browser-bar'
```

### Use in your component

```jsx
    const App = () => {
        const result = useThemedBrowserBar("#aa2020")
        return  <YourComponents />
    }
```


### Code from gif example
This code assumse you have started your project with CRA and have the releveant stylesheets & svg assets

```jsx
import { useThemedBrowserBar } from '@owl-93/themed-browser-bar'
import logo from './logo.svg';
import './App.css';
import { useState , useMemo} from 'react';

const colors = ["#aa2020", "#20aa20", "#2020aa"]

export const App = () => {
  const [current, setCurrent] = useState<number>(0)
  const color = useMemo(() => colors[current % colors.length], [current])
  useThemedBrowserBar(color)

  return (
    <div className="App">
      <header className="App-header">
        <div style={{...headerStyle,  background: color}}>Hello</div>
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => setCurrent((current: number) => current + 1 )}
        style={{...buttonStyle, background: color}}>
          toggle color tag
        </button>
      </header>
    </div>
  );
}

const buttonStyle = {
  color: 'white',
  padding: '8px',
  border: 'none',
  fontSize: '16px',
  borderRadius: '4px',
  transition: 'background 200ms ease',
  marginTop: '3em'
}

const headerStyle = {
  height: "64px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  top: 0,
  paddingLeft: 24,
  transition: 'background 200ms ease',
  position: 'absolute' as 'absolute'
}
```