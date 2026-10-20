import { PrivacyPolicyComponent } from "./PrivacyPolicyComponent";

export const metadata = {
  title: "Privacy and Policy | Royal Motors",
  description: "Royal Motors privacy charter and confidentiality protocol.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative w-full overflow-hidden">
      <PrivacyPolicyComponent />
    </div>
  );
}
