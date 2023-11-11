import Accordion from "./Accordion";
import { faqs } from "./faq";

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
