import { TermsAndConditionsComponent } from "./TermsAndConditionsComponent";

export const metadata = {
  title: "Terms and Conditions | Royal Motors",
  description: "Royal Motors terms of escort and membership agreements.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="relative w-full overflow-hidden">
      <TermsAndConditionsComponent />
    </div>
  );
}
