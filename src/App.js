import React, {useState} from 'react';
import './App.css';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';

export const SectionContext = React.createContext();

const App = () => {
    const [currentSection, setCurrentSection] = useState("main");
    const handleCurrentSection = (sectionName) => {
        setCurrentSection(sectionName);
    }
    return (
        <div className="App w-screen h-screen bg-main  overflow-hidden">
            <SectionContext.Provider value={{currentSection, handleCurrentSection}}>
                <div className="container">
                    <Nav />
                    <Main />
                </div>
            </SectionContext.Provider>
        </div>
    )
}
export default App;