import { useEffect, useRef, useState, type MouseEvent, type TouchEvent } from "react";
import { Linkedin, Mail, Youtube } from "lucide-react";

const TeamStructure = () => {
  const founders = [
    {
      name: "Swatantra Choudhary",
      role: "Founder",
      description:
        "The mind behind MUJ Toppers, uniting vision and people to shape the journey ahead.",
      image: "/lovable-uploads/swatantra.png",
      linkedin: "https://www.linkedin.com/in/swatantra-choudhary-b1139321a/",
      youtube: "http://www.youtube.com/@justswatantra",
    },
    {
      name: "Sahil Moharil",
      role: "Co-Founder",
      description:
        "The heart of MUJ Toppers, solving at the right time and nurturing a culture of support.",
      image: "/lovable-uploads/sahil.png",
      linkedin: "https://www.linkedin.com/in/sahil-moharil/",
    },
    {
      name: "Mr. Chandrapal Dangi",
      role: "Mentor",
      description:
        "The guiding force, giving us freedom to think big while keeping us grounded with wisdom.",
      image: "/lovable-uploads/chandrapal.png",
      linkedin:
        "https://www.linkedin.com/in/chandrapal-singh-dangi-4a226134/?originalSubdomain=in",
      email: "chandrapalsingh.dangi@jaipur.manipal.edu",
    },
  ];

  const teamData = [
    {
      name: "Namit Tickoo",
      level: 2,
      color: "bg-purple-500",
      description: "President",
      image: "/lovable-uploads/namit.jpg",
    },
    {
        name: "Anuj Bhardwaj",
        level: 3,
        color: "bg-yellow-500",
        description: "Managing Director",
        image: "/lovable-uploads/anuj.jpg",
    },
    {
        name: "Shwetanshu Gautam",
        level: 4,
        color: "bg-teal-500",
        description: "General Secretary",
        image: "/lovable-uploads/shwetanshu.jpg",
    },
    {
        name: "Kislay Singh",
        level: 4,
        color: "bg-pink-500",
        description: "Head of Editorial",
        image: "/lovable-uploads/kislay.jpg",
    },
    {
      name: "Vanshika",
      level: 4,
      color: "bg-cyan-500",
      description: "Head of Socials",
      image: "/lovable-uploads/vanshika.jpg",
    },
    {
        name: "Arkadeep",
        level: 4,
        color: "bg-red-500",
        description: "Head of Tech",
        image: "/lovable-uploads/arkdeep.jpeg",
    },
    {
      name: "Ruhaani Satija",
      level: 4,
      color: "bg-green-500",
      description: "Head Of Design",
      image: "/lovable-uploads/RUHAANI.jpeg",    
    },
    {
        name: "Manit Garg",
        level: 4,
        color: "bg-indigo-500",
        description: "Head of Operations",
        image: "/lovable-uploads/manit.jpeg",
    }
  ];
  const previousteamData = [
    {
      name: "Chirag Jotwani",
      level: 2,
      color: "bg-purple-500",
      description: "President",
      image: "/lovable-uploads/chirag.jpg",
    },
    {
      name: "Chandra Panday",
      level: 3,
      color: "bg-purple-500",
      description: "Vice President",
      image: "/lovable-uploads/chandra .jpg",
    },
    {
        name: "Chanchal Agrawal",
        level: 4,
        color: "bg-yellow-500",
        description: "Managing Director",
        image: "/lovable-uploads/chanchal.jpg",
    },
    {
        name: "Harsh Tyagi",
        level: 4,
        color: "bg-teal-500",
        description: "General Secretary",
        image: "/lovable-uploads/harsh.jpg",
    },
    {
      name: "Shaili Saxena",
      level: 4,
      color: "bg-cyan-500",
      description: "Social Media Head",
      image: "/lovable-uploads/shaili.jpg",
    },
    {
        name: "Keshav Goel",
        level: 4,
        color: "bg-red-500",
        description: "Tech Lead",
        image: "/lovable-uploads/keshav.jpeg",
    }
  ];
  

  const coreCommittee = [
    {
      name: "Arush Kaushik",
      color: "bg-blue-500",
      description: "Tech Team",
      image: "/lovable-uploads/ARUSH.jpg",
    },
    {
      name: "Shreyansh Singh",
      color: "bg-green-500",
      description: "Tech Team",
      image: "/lovable-uploads/shreyansh.jpeg",
    },
    {
      name: "Auritro Ghosh",
      color: "bg-orange-500",
      description: "Operations Team",
      image: "/lovable-uploads/auritro.jpeg",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [executiveType, setExecutiveType] = useState<
    "current" | "previous"
  >("current");
  const [hovered, setHovered] = useState<number | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);

  const displayedTeam =
  executiveType === "current"
    ? teamData
    : previousteamData;
  const totalExecutives = Math.max(displayedTeam.length, 1);

  const visibleCount = 5;
  const offset = Math.floor(visibleCount / 2);

  const visibleIndices = Array.from(
    { length: visibleCount },
    (_, index) => (activeIndex - offset + index + totalExecutives) % totalExecutives
  );

  const slotMeta = [
    { scale: 0.72, zIndex: 1, opacity: 0.55, translateY: 28, blur: 1.2 },
    { scale: 0.84, zIndex: 2, opacity: 0.75, translateY: 14, blur: 0.4 },
    { scale: 1, zIndex: 5, opacity: 1, translateY: 0, blur: 0 },
    { scale: 0.84, zIndex: 2, opacity: 0.75, translateY: 14, blur: 0.4 },
    { scale: 0.72, zIndex: 1, opacity: 0.55, translateY: 28, blur: 1.2 },
  ];

  const prevExecutive = () =>
    setActiveIndex((index) => (index - 1 + totalExecutives) % totalExecutives);
  const nextExecutive = () =>
    setActiveIndex((index) => (index + 1) % totalExecutives);

  useEffect(() => {
    const interval = window.setInterval(() => {
      nextExecutive();
    }, 3000);

    return () => window.clearInterval(interval);
  }, [totalExecutives]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prevExecutive();
      if (event.key === "ArrowRight") nextExecutive();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [totalExecutives]);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    dragStartX.current = event.clientX;
  };

  const handleMouseUp = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    isDragging.current = false;
    const delta = event.clientX - dragStartX.current;

    if (Math.abs(delta) > 40) {
      if (delta < 0) nextExecutive();
      else prevExecutive();
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    dragStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const delta = event.changedTouches[0].clientX - dragStartX.current;

    if (Math.abs(delta) > 40) {
      if (delta < 0) nextExecutive();
      else prevExecutive();
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-orange-50 py-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-10 top-20 h-96 w-96 animate-pulse rounded-full border-4 border-purple-300"></div>
        <div
          className="absolute bottom-20 right-10 h-80 w-80 animate-pulse rounded-full border-4 border-orange-300"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border-4 border-pink-300"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-800">"Meet the Brains Behind the Madness"</h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"></div>
        </div>

        <div className="mx-auto mb-16 max-w-6xl">
          <div className="mb-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="relative overflow-hidden rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "url('/lovable-uploads/1bc413ca-0f17-4174-94bd-6295667863f3.png')",
                    backgroundSize: "200px 200px",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                  }}
                ></div>

                <div className="relative z-10 mb-6">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 p-1 sm:h-28 sm:w-28">
                    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="relative z-10 mb-3 text-lg font-bold text-gray-800 sm:text-xl">
                  {founder.name}
                </h3>
                <p className="relative z-10 mb-4 text-sm leading-relaxed text-gray-600">
                  {founder.description}
                </p>
                <div className="relative z-10 mb-4 text-xs font-semibold uppercase tracking-wide text-gray-700">
                  {founder.role}
                </div>

                <div className="relative z-10 flex justify-center space-x-3">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-blue-100"
                  >
                    <Linkedin className="h-4 w-4 text-blue-600" />
                  </a>
                  {founder.youtube ? (
                    <a
                      href={founder.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-red-100"
                    >
                      <Youtube className="h-4 w-4 text-red-600" />
                    </a>
                  ) : (
                    <a
                      href={`mailto:${founder.email}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-orange-100"
                    >
                      <Mail className="h-4 w-4 text-orange-600" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8 flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"></div>
              <div className="h-3 w-3 rounded-full bg-gray-400"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              <svg className="h-8 w-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-400"></div>
              <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"></div>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-16 max-w-6xl md:mb-20">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-800 sm:text-4xl">Meet the Executives</h3>
            <div className="mb-6 flex justify-center gap-4">
              <button
                onClick={() => {
                  setExecutiveType("current");
                  setActiveIndex(0);
                }}
                className={`rounded-full px-5 py-2 font-medium transition-all ${
                  executiveType === "current"
                    ? "bg-gradient-to-r from-purple-500 to-orange-500 text-white"
                    : "bg-white text-gray-700 shadow"
                }`}
              >
                2026-Present
              </button>
              <button
                onClick={() => {
                  setExecutiveType("previous");
                  setActiveIndex(0);
                }}
                className={`rounded-full px-5 py-2 font-medium transition-all ${
                  executiveType === "previous"
                    ? "bg-gradient-to-r from-purple-500 to-orange-500 text-white"
                    : "bg-white text-gray-700 shadow"
                }`}
              >
                2024-2026
              </button>
            </div>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"></div>
          </div>

          <div
            key={executiveType}
            className="relative mx-auto flex w-full max-w-6xl items-center justify-center px-3 py-10 sm:px-6"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => {
              isDragging.current = false;
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              onClick={prevExecutive}
              aria-label="Previous executive"
              className="absolute left-0 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/90 text-gray-700 shadow-lg backdrop-blur-sm transition hover:bg-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="flex w-full items-end justify-center gap-3 sm:gap-4 lg:gap-5">
              {visibleIndices.map((memberIndex, slot) => {
                const member = displayedTeam[memberIndex];
                const meta = slotMeta[slot];
                const isCenter = slot === 2;
                const isHovered = hovered === slot;

                return (
                  <div
                    key={member.name}
                    onClick={() => {
                      if (!isCenter) {
                        if (slot < 2) prevExecutive();
                        else nextExecutive();
                      }
                    }}
                    onMouseEnter={() => setHovered(slot)}
                    onMouseLeave={() => setHovered(null)}
                    className="relative flex-shrink-0 overflow-hidden rounded-[1.4rem] bg-[#e8e8e6]"
                    style={{
                      width: "clamp(186px, 34vw, 280px)",
                      height: "clamp(246px, 44vw, 360px)",
                      opacity: meta.opacity,
                      transform: `scale(${isHovered && !isCenter ? meta.scale * 1.04 : meta.scale}) translateY(${meta.translateY}px)`,
                      zIndex: isHovered ? 10 : meta.zIndex,
                      filter: meta.blur > 0 ? `blur(${meta.blur}px)` : "none",
                      boxShadow: isCenter
                        ? "0 24px 56px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)"
                        : isHovered
                        ? "0 12px 32px rgba(0,0,0,0.13)"
                        : "0 4px 16px rgba(0,0,0,0.07)",
                      border: isCenter
                        ? "1.5px solid rgba(255,255,255,0.85)"
                        : "1.5px solid rgba(255,255,255,0.6)",
                      transition:
                        "transform 0.45s cubic-bezier(.4,0,.2,1), opacity 0.45s ease, filter 0.45s ease, box-shadow 0.3s ease",
                      cursor: isCenter ? "default" : "pointer",
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center"
                      style={{ transition: "filter 0.4s ease" }}
                    />

                    <div
                      className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-8"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(20,20,20,0.72) 60%, transparent)",
                        opacity: isCenter || isHovered ? 1 : 0.85,
                      }}
                    >
                      <p className="m-0 text-[30px] font-semibold leading-tight text-white">
                        {member.name}
                      </p>
                      <p className="m-0 mt-0.5 text-[14px] font-normal leading-tight text-white/80">
                        {member.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={nextExecutive}
              aria-label="Next executive"
              className="absolute right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/90 text-gray-700 shadow-lg backdrop-blur-sm transition hover:bg-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {displayedTeam.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to executive ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "scale-125 bg-gradient-to-r from-purple-500 to-orange-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl">Core Committee</h3>
          <p className="mx-auto mb-4 max-w-2xl px-4 text-base text-gray-600 sm:text-lg">
            The driving force behind our success - dedicated leaders shaping the future
          </p>

          <div className="mb-6 flex justify-center gap-4">
              <button
                className="rounded-full bg-gradient-to-r from-purple-500 to-orange-500 px-5 py-2 font-medium text-white"
              >
                2026-Present
              </button>
            </div>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"></div>

          <div className="mx-auto mt-10 w-full max-w-none px-0 pb-2 sm:px-4">
            <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-4 lg:gap-6">
              {coreCommittee.map((member) => (
                <div
                  key={member.name}
                  className="relative mx-auto overflow-hidden rounded-[1.4rem] bg-[#e8e8e6] shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{
                    width: "min(88vw, 220px)",
                    height: "clamp(165px, 58vw, 290px)",
                    border: "1.5px solid rgba(255,255,255,0.7)",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center"
                    style={{ transition: "filter 0.4s ease" }}
                  />

                  <div
                    className="absolute inset-x-0 bottom-0 px-2 pb-2 pt-6 sm:px-4 sm:pb-4 sm:pt-10"
                    style={{
                      background: "linear-gradient(to top, rgba(20,20,20,0.72) 60%, transparent)",
                    }}
                  >
                    <p className="m-0 text-[10px] font-semibold leading-tight text-white sm:text-[16px]">
                      {member.name}
                    </p>
                    <p className="m-0 mt-0.5 text-[9px] font-normal leading-tight text-white/80 sm:mt-1 sm:text-[13px]">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStructure;
