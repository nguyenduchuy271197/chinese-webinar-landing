import HighlightWord from "@/components/highlight-word";
import { Heading, HeadingDescription, HeadingTitle } from "./share/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section>
      <div className="container">
        <div className="space-y-16 sm:pt-28">
          <Heading>
            <HeadingTitle>
              <HighlightWord>FAQ</HighlightWord>
            </HeadingTitle>
            <HeadingDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              congue, nisl eget molestie varius, enim ex faucibus purus.
            </HeadingDescription>
          </Heading>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It`&apos;`s animated by default, but you can disable it
                  if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
