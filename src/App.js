import React, {useState, useEffect} from 'react';
import './App.css';
import Contact from './components/contact/Contact';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';
import Skills from './components/skill/Skills';

export const SectionContext = React.createContext();

const App = () => {
    const [prevSlideIndex, setPrevSlideIndex] = useState(0);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(1);
    const [slideDirection, setSlideDirection] = useState(null);

    useEffect(() => {
        if (currentSectionIndex === prevSlideIndex) {
            return;
        }
        else if (currentSectionIndex > prevSlideIndex) {
            setSlideDirection('slide-down');
        }
        else {
            setSlideDirection('slide-up');
        }
    }, [currentSectionIndex, slideDirection, prevSlideIndex]);

    const handleCurrentSection = (sectionName) => {
        setPrevSlideIndex(currentSectionIndex);
        setCurrentSectionIndex(sectionName);
    }

    return (
        <div className="App w-screen h-screen  overflow-hidden">
            <SectionContext.Provider value={{currentSectionIndex, handleCurrentSection, prevSlideIndex}}>
                <div className="container">
                    <Nav />
                </div>
                <Main
                    slideDirection={currentSectionIndex === 1 ? slideDirection : ''}
                    isVisible={currentSectionIndex === 1}
                    prevSlideIndex={prevSlideIndex}
                    index={1}
                />
                <Skills
                    slideDirection={currentSectionIndex === 2 ? slideDirection : ''}
                    isVisible={currentSectionIndex === 2}
                    prevSlideIndex={prevSlideIndex}
                    index={2}
                />
                <Contact
                    slideDirection={currentSectionIndex === 3 ? slideDirection : ''}
                    isVisible={currentSectionIndex === 3}
                    prevSlideIndex={prevSlideIndex}
                    index={3}
                />
            </SectionContext.Provider>
        </div>
    )
}
export default App;