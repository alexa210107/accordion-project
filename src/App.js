
import { useState } from 'react';
import './App.css';
import SplitText from "./SplitText";
function App() {


  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div className="App">
      <SplitText
        text="Welcome to my first react app!"
        className='open-text'
        delay={50}
        duration={1.25}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
        showCallback
      />
      <Accordion />
    </div>
  );
}

function Accordion() {

  const questions = [
    {
      title: "Where are these chairs assembled?",
      text:
        "Our chairs are carefully assembled in our factory in Germany, following strict quality standards."
    },
    {
      title: "How long do I have to return my chair?",
      text:
        "You have 30 days from the delivery date to return your chair for a full refund, no questions asked."
    },
    {
      title: "Do you ship to countries outside the EU?",
      text:
        "Yes, we ship worldwide. Shipping fees and delivery times vary depending on the destination."
    },
    {
      title: "Can I customize the color of my chair?",
      text:
        "Absolutely! You can choose from a range of colors during checkout or contact our support for special requests."
    },
    {
      title: "Is assembly required?",
      text:
        "Minimal assembly is needed. Each chair comes with clear instructions and all tools required."
    }
  ];
  const [openId, setOpenId] = useState(null);
  const handleToggle = (index) => {
    setOpenId(openId === index ? null : index);
  }



  return (
    <div className='accordion'>
      {questions.map((item, index) => (
        <AccordionItem
          item={item}
          key={index}
          index={index}
          isOpen={openId === index}
          handleOpen={handleToggle}
        />
      ))}
    </div>
  );

}

function AccordionItem({ item, index, handleOpen, isOpen }) {

  return (
     <div className={`item ${isOpen ? "open" : ""}`} onClick={() => handleOpen(index)}>
      <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{item.title}</p>
      <p className='icon'>{isOpen ? "-" : "+"}</p>
      {isOpen && <div>{item.text}</div>}
    </div>
  );
}

export default App;
