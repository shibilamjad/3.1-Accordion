import "./FaqContent.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function FaqContent({ item, isOpen, setIsOpen }) {
  const faqOpen = item.id === isOpen;

  function handleToggle() {
    setIsOpen(faqOpen ? null : item.id);
  }
  console.log(isOpen);
  return (
    <div className="box">
      <li>
        <button onClick={handleToggle}>
          <div className="row ">
            <h2>{item.title}</h2>
            {!faqOpen ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </button>
        {faqOpen && <p>{item.content}</p>}
      </li>
    </div>
  );
}

export default FaqContent;
