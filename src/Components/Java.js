import React from 'react'
import AceEditor from 'react-ace'

import { useState } from 'react'

function Java(props) {
  const [code, setCode] = useState(`class Solution{
    public static void main(String args[]){
      System.out.println("No more Deepdiving");
    }
}`)
  return (
    <div>Java
      <AceEditor
      style={{
        height: '200px',
        width: '100%',
    }}
    placeholder='Start Coding'
    mode='javascript'
    
    name='basic-code-editor'
    onChange={currentCode => setCode(currentCode)}
    fontSize={18}
    showPrintMargin={true}
    showGutter={true}
    highlightActiveLine={true}
    value={code}
    setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 4,
        theme:'ace/theme/github',
    }}
    />
    </div>
  )
}

export default Java