import { useState } from "react";
import FaqContent from "./FaqContent";
import "./Faq.css";

const Array = [
  {
    id: 1,
    title: "Content1",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passa",
  },
  {
    id: 2,
    title: "Content2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passa",
  },
  {
    id: 3,
    title: "Content3",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passa",
  },
  {
    id: 4,
    title: "Content4",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passa",
  },
];

function Faq() {
  const [faq, setFaq] = useState(Array);
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="container_faq">
      <h1>FAQ</h1>
      <div>
        <ul>
          {faq.map((item) => (
            <FaqContent
              key={item.id}
              item={item}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Faq;
