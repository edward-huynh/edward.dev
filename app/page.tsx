import { InfoComponents } from "@/components/InfoComponents";
import { Banner } from "@/components/Banner";
import { CTAProfile } from "@/components/CTAProfile";
import { ListProjects } from "@/components/projects/ListProjects";
import { Stacking } from "@/components/Stacking";
import { Experience } from "@/components/Experience";
import { ReviewInfo } from "@/components/ReviewInfo";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { WorkProcess } from "@/components/WorkProcess";
import { InteractiveElements } from "@/components/InteractiveElements";
export default function Home() {
  return (
    <>
      <InteractiveElements />
      <section className="size-full p-5 lg:p-20">
        <div className="size-full flex flex-col gap-10">
          <div className="">
            {/* Banner */}
            <Banner />
            {/* Info */}
            <InfoComponents />
          </div>
          {/* CTA Profile */}
          <CTAProfile />
          {/* Services */}
          <Services />
          {/* Stacking */}
          <Stacking />
          {/* Experience */}
          <Experience />
          {/* Project */}
          <ListProjects type="CAROUSEL" />
          {/* Work Process */}
          <WorkProcess />
          {/* Reviews */}
          <ReviewInfo />
          {/* Contact Form */}
          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
