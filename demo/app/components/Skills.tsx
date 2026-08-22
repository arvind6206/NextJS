import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "MongoDB",
  "Next.js",
  "TypeScript",
];

function Skills() {
  return (
    <section className="bg-slate-200 px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          My Skills
        </h2>

        <p className="mt-2 text-gray-600">
          Technologies I work with
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-lg border border-gray-300 bg-white p-5 text-center font-semibold text-gray-800 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;