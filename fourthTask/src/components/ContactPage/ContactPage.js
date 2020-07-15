import React, { useRef, useEffect, useState } from "react";

const ContactPage = () => {
  const inputRef = useRef(null); //gdybym zrobił console.log(inputRef) otrzymał bym obiekt, którego polem "current" byłby nasz input
  //czyli "current" przetrzymuje referencje inputa

  useEffect(() => {
    inputRef.current.focus();
  });

  const [input, setInput] = useState("");

  const onButtonClick = () => {
    alert(`Dziękujemy, skontaktujemy się z Toba pod adresem: ${input}`);
  };

  return (
    <div>
      <h3>Contact Page</h3>
      <div>
        <h4>Lets talk!</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia
          quam id justo hendrerit mollis. Sed feugiat erat ac tortor vehicula,
          et gravida ante tincidunt. Quisque iaculis urna a libero consequat
          rutrum.
        </p>
        <label>Email</label>
        <input
          value={input}
          ref={inputRef}
          type="text"
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={onButtonClick}>SEND</button>
      </div>
    </div>
  );
};

export default ContactPage;
