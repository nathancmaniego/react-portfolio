"use client";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    technologies,
    githubUrl,
    liveUrl,
    tint = "#DDD7CB",
    emoji,
  } = project;

  const href = liveUrl || (githubUrl && githubUrl !== "null" ? githubUrl : null);

  const card = (
    <article className="group">
      {/* Tile */}
      <div
        className="relative aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: tint }}
      >
        {image ? (
          <Image
            src={image}
            alt={`${title} project screenshot`}
            fill
            className="object-cover project-image-zoom"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <span
            className="text-6xl sm:text-7xl project-image-zoom"
            role="img"
            aria-hidden="true"
          >
            {emoji}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-ink">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2 max-w-md">
            {description}
          </p>
          <div
            className="mt-3 flex flex-wrap gap-1.5"
            role="list"
            aria-label="Technologies used"
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 border border-ink/15 text-gray-600 text-xs rounded-full font-medium"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {href && (
          <span
            className="arrow-circle shrink-0 mt-1 w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center text-ink"
            aria-hidden="true"
          >
            <svg className="arrow-icon w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
          </span>
        )}
      </div>
    </article>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="arrow-link block"
        aria-label={`View ${title}`}
      >
        {card}
      </a>
    );
  }

  return card;
};

export default ProjectCard;
