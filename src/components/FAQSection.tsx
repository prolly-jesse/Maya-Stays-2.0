import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is 24/7 and check-out is at your pleasure. Early check-in is arranged subject to availability — contact our manager on WhatsApp.",
  },

  {
    q: "What guest information do you require?",
    a: "We require a valid national ID or passport for all guests at check-in. A copy will be kept on file for security purposes as per Kenyan law.",
  },
  {
    q: "Is parking available?",
    a: "Yes, we offer ample secure parking within the compound, monitored 24/7 with CCTV surveillance. Parking is complimentary for all guests.",
  },
  {
    q: "How do I get to Maya Stays?",
    a: "We are located 100 metres behind Dreams Hotel on the Kisumu-Busia Highway. Use Google Maps and search for 'Dreams Hotel Busia' — we are directly behind it.",
  },
  {
    q: "Can I pay via M-Pesa?",
    a: "Yes! We accept M-Pesa, bank transfers, and cash. Payment details will be shared upon booking confirmation.",
  },
];

const FAQSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            <span className="gold-text">FAQs</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to know before your stay.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card rounded-xl px-5 border-none"
            >
              <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors duration-300 py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
