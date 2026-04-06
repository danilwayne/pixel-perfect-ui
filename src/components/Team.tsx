import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const members = [
  { img: team1, name: "Ana Silva", role: "Veterinária" },
  { img: team2, name: "Carlos Santos", role: "Veterinário" },
  { img: team3, name: "Maria Oliveira", role: "Pet Groomer" },
  { img: team4, name: "João Costa", role: "Treinador" },
];

const Team = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          — Our Team
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          QUALIFIED PETS CARE<br />PROFESSIONALS
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((m) => (
          <div key={m.name} className="text-center group">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary/20 group-hover:border-primary transition-colors">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="font-heading font-semibold text-foreground">
              {m.name}
            </h3>
            <p className="text-muted-foreground text-sm">{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
