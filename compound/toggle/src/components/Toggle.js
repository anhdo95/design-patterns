import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
} from 'react'

import Switch from './Switch'

const ToggleContext = createContext()

export default function Toggle({ onToggle, children }) {
  const [on, setOn] = useState(false)
  
  const toggle = useCallback(() => {
    setOn((oldOn) => {
      onToggle(!oldOn)
      return !oldOn
    })
  }, [onToggle])
  const value = useMemo(() => ({ on, toggle }), [on, toggle])

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  )
}

function useToggleContext() {
  return useContext(ToggleContext)
}

function Off({ children }) {
  const { on } = useToggleContext()
  return !on && children
}

function On({ children }) {
  const { on } = useToggleContext()
  return on && children
}

function Button(props) {
  const { on, toggle } = useToggleContext()
  return <Switch on={on} onClick={toggle} {...props} />
}

Toggle.Off = Off
Toggle.On = On
Toggle.Button = Button
