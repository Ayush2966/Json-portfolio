import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { typeJSON } from './helpers/typingAnimation'
import Contact from '@components/Contact'

import userData from '@assets/data.json'

// import multiple themes
import {
  atomDark,
  materialLight,
  materialDark,
  materialOceanic,
  oneLight
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import LineBreak from './components/LineBreak'

// themes array
const themes = [
  atomDark,
  materialLight,
  materialDark,
  materialOceanic,
  oneLight
]

// set random index for themes array
const randomTheme = [Math.floor(Math.random() * themes.length)]

// set random theme
const codeTheme = themes[randomTheme]

const App = () => {
  // initialize the typed data
  const [data, setData] = useState('')
  const [typingAnimation, setTypingAnimation] = useState(true)
  const [typingStatus, setTypingStatus] = useState(true)
  const [lineStatus, setTLineStatus] = useState(false)

  // is the animation over or not 
  useEffect(() => {
    setTimeout(() => {
      if (!typingStatus) {
        setTLineStatus(true)
      }
    }, 1200);
  }, [typingStatus])


  // start typing the data
  const delay = 10
  typeJSON(userData, data, setData, delay, setTypingStatus)


  // stop typing (render all data at once)
  const stopTyping = () => {
    setTypingStatus(false)
    setTypingAnimation(false)
  }

  const handleDoubleClick = (event) => {
    if (event.detail == 2) {
      stopTyping()
    }
  }

  // code style
  const syntaxStyle = {
    ...codeTheme,
    'pre[class*="language-"]': {
      ...codeTheme['pre[class*="language-"]'],
      background: 'none'
    },
    'code[class*="language-"]': {
      ...codeTheme['code[class*="language-"]'],
      background: 'none'
    }
  }

  return (
    <div id='root' onClick={handleDoubleClick} >
      <div className='root__code'>
        <pre>
          <SyntaxHighlighter language='json' style={syntaxStyle}>
            {typingAnimation ? data : JSON.stringify(userData, null, 2)}
          </SyntaxHighlighter>
        </pre>
      </div>

      <LineBreak typingStatus={typingStatus} />

      <div className='root__contact'>{lineStatus ? <Contact /> : ''}</div>
    </div>
  )
}

export default App
