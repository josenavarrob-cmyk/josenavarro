import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Jose Navarro: background and ongoing interests across AI, work, and society."
};

const interests = [
  "AI and work",
  "Human behavior",
  "Technology and society",
  "Organizational culture",
  "Emotional labor"
];

export default function AboutPage() {
  return (
    <div className="container-narrow py-14 sm:py-20">
      <article className="max-w-reading space-y-8">
        <header>
          <h1 className="text-4xl font-semibold tracking-tight">About</h1>
        </header>

        <p className="leading-relaxed text-muted">
          I work at the intersection of customers, teams, and emerging
          technology. Over the last decade, I have led Customer Success
          organizations through periods of rapid product change, scale, and
          organizational redesign.
        </p>

        <p className="leading-relaxed text-muted">
          My professional background spans strategic account management,
          cross-functional operations, and leadership development. I am
          particularly interested in how leaders can build resilient
          institutions while integrating AI into everyday work.
        </p>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">
            Current interests
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
