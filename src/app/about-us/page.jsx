import { AboutUsComponent } from "./AboutUsComponent";

export const metadata = {
  title: "About Us | Royal Motors",
  description: "Learn about the heritage, craftsmanship, and vision of Royal Motors.",
};

export default function AboutUsPage() {
  return (
    <div className="relative w-full overflow-hidden">
      <AboutUsComponent />
    </div>
  );
}
