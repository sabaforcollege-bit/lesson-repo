import { useState } from "react";
import Button from "./button";

function App() {
  const buttonSc = [{ sc: 1 }, { sc: 2 }, { sc: 3 }, { sc: 4 }, { sc: 5 }];

  const [Rating, setRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <>
      {isSubmitted ? (
        <div>
          <h1>you selected {Rating} of 5</h1>
          <h1>Thank you!</h1>
          <p>We appreciate you taking the time to give a rating. if you ever need more support, don't hesitate to get in touch!</p>
        </div>
      ) : (
        <div>
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div>
            {buttonSc.map(({ sc }) => (<Button setRating={setRating} score={sc} />
            ))}
            <button type="submit" onClick={() => { setIsSubmitted(true) }}>
              Submit
            </button>
          </div>
        </div>
      )
      }
    </>
  );
};

export default App