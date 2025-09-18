import React, {JSX, useState} from "react"
import './App.css'
import './VFX.css'

//TODO: I'd like to remove the need for imports right here and instead read the interface file
// For now this is sufficient
import SystemDiagnostics from './Components/Interfaces/SystemDiagnostics/MainComponent'
import TestComp from "./Components/Interfaces/Test/MainComponent"
interface Test {
    [key: string]: JSX.Element,
}
const ActiveInterfaceMap : Test = {
    Status: <SystemDiagnostics />,
    Test: <TestComp />
}

function App() {
    const [selectedTab, setSelectedTab] = useState('Status')

    return (
        <div className="Background">
            <div className="TerminalContent">
                <div className="TerminalMenu">
                    {(Object.keys(ActiveInterfaceMap)).map((key) => (
                        <button key={key} onClick={() => setSelectedTab(key)}>
                            {key}
                        </button>
                    ))}
                </div>

                <div className="TerminalText">
                    {ActiveInterfaceMap[selectedTab]}
                </div>
            </div>
        </div>
    );
}

export default App;