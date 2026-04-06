import petsHappy from "@/assets/pets-happy.jpg";

const About = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={petsHappy}
            alt="Pets felizes"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            loading="lazy"
            width={640}
            height={512}
          />
        </div>
        <div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            — About Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 leading-tight">
            WE KEEP YOUR PETS HAPPY ALL TIME
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Dolor dolor clita ipsum tempor sit. Clita erat ipsum et lorem stet no
            labore sed clita duo purus dolore.
          </p>
          <div className="flex gap-4">
            <a
              href="#services"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-pet-green-dark transition-colors"
            >
              EXPLORE NOW
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
