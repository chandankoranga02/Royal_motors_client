import { ContactUsComponent } from "./ContactUsComponent";

export const metadata = {
  title: "Contact Us | Royal Motors",
  description: "Get in touch with Royal Motors white-glove concierge liaison.",
};

export default function ContactUsPage() {
  return (
    <div className="relative w-full overflow-hidden">
      <ContactUsComponent />
    </div>
  );
}
