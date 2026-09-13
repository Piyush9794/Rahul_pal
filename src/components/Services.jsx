// src/components/Services.jsx
import {
  Coffee,
  PaintBucket,
  Key,
  Wine,
  Gift,
  Phone,
} from "lucide-react";

const services = [
  {
    name: "Customized Mugs",
    icon: Coffee,
    description:
      "Ceramic mugs printed with your photos or designs.",
  },
  {
    name: "Mobile Phone Covers",
    icon: Phone,
    description:
      "Sublimation printed covers for all smartphone models.",
  },
  {
    name: "Sublimation Printing",
    icon: PaintBucket,
    description:
      "High-quality sublimation for vibrant, durable prints.",
  },
  {
    name: "Customized Keychains",
    icon: Key,
    description:
      "Metal or acrylic keychains with custom engraving or prints.",
  },
  {
    name: "Printed Bottles",
    icon: Wine,
    description:
      "Stainless-steel bottles with your artwork.",
  },
  {
    name: "Personalized Gifts",
    icon: Gift,
    description:
      "Unique gifts tailored to your ideas.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative overflow-hidden
        bg-[#F9FAFB]
        py-20
      "
    >
      {/* Background decoration */}
      <div
        className="
          absolute -left-24 -top-24
          h-72 w-72
          rounded-full
          
          blur-3xl
        "
      />

      <div
        className="
          absolute -bottom-24 -right-24
          h-72 w-72
          rounded-full
          
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <span
            className="
              mb-3 inline-block
              rounded-full
              bg-indigo-100
              px-4 py-1.5
              text-sm font-semibold
              text-indigo-600
            "
          >
            ✨ Premium Printing Services
          </span>

          <h2
            className="
              text-4xl
              font-extrabold
              tracking-tight
              text-[#111827]
              sm:text-5xl
            "
          >
            What We{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
              "
            >
              Print
            </span>
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-7
              text-[#6B7280]
              sm:text-lg
            "
          >
            From business essentials to eye-catching marketing
            materials, we bring your ideas to life with premium
            quality printing.
          </p>
        </div>

        {/* Services */}
        <div
          className="
            grid gap-7
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((s, index) => {
            const Icon = s.icon;

            return (
              <div
                key={s.name}
                className="service-card group relative"
                style={{
                  "--delay": `${index * 2.7}s`,
                }}
              >

                {/* Outer gradient glow */}
                <div
                  className="
                    absolute -inset-[2px]
                    rounded-2xl

                    bg-gradient-to-r
                    from-indigo-600
                    to-purple-600
 
                    opacity-20
                    blur-[2px]

                    transition-all duration-500

                    group-hover:opacity-100
                    group-hover:blur-md
                  "
                />

                {/* Card */}
                <div
                  className="
                    service-inner
                    relative h-full
                    overflow-hidden
                    rounded-2xl

                    border border-indigo-100/60

                    bg-gradient-to-br
                    from-indigo-50
                    via-white
                    to-purple-50

                    p-7
                    text-center

                    shadow-[0_8px_30px_rgba(79,70,229,0.08)]

                    transition-all duration-500
                    ease-out

                    group-hover:-translate-y-3
                    group-hover:scale-[1.04]

                    group-hover:border-indigo-200

                    group-hover:bg-gradient-to-br
                    group-hover:from-indigo-100
                    group-hover:via-white
                    group-hover:to-purple-100

                    group-hover:shadow-[0_25px_60px_rgba(79,70,229,0.22)]
                  "
                >

                  {/* Decorative gradient circle */}
                  <div
                    className="
                      absolute
                      -right-12
                      -top-12

                      h-32
                      w-32

                      rounded-full

                      bg-gradient-to-br
                      from-indigo-400/25
                      to-purple-400/10

                      blur-xl

                      transition-all
                      duration-500

                      group-hover:scale-150
                      group-hover:opacity-80
                    "
                  />

                  {/* Second decorative circle */}
                  <div
                    className="
                      absolute
                      -bottom-14
                      -left-14

                      h-32
                      w-32

                      rounded-full

                      bg-gradient-to-br
                      from-purple-400/20
                      to-indigo-400/10

                      blur-xl

                      transition-all
                      duration-500

                      group-hover:scale-150
                    "
                  />

                  {/* Number */}
                  <span
                    className="
                      absolute
                      right-5
                      top-4

                      text-5xl
                      font-black

                       text-indigo-100


                      transition-all
                      duration-500

                      group-hover:text-indigo-500
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      service-icon
                      relative z-10

                      mx-auto mb-6

                      flex h-20 w-20
                      items-center justify-center

                      rounded-2xl

                      bg-gradient-to-r
                      from-indigo-600
                      to-purple-600

                      shadow-lg
                      shadow-indigo-500/25

                      transition-all
                      duration-500

                      group-hover:rotate-6
                      group-hover:scale-110

                      group-hover:shadow-xl
                      group-hover:shadow-purple-500/30
                    "
                  >
                    <Icon
                      size={38}
                      strokeWidth={1.8}
                      className="
                        text-white

                        transition-all
                        duration-500

                        group-hover:scale-110
                      "
                    />

                    {/* Icon ring */}
                    <span
                      className="
                        absolute
                        inset-0

                        rounded-2xl

                        border-2
                        border-white/40

                        scale-90
                        opacity-0

                        transition-all
                        duration-500

                        group-hover:scale-110
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      relative z-10

                      mb-3

                      text-xl
                      font-bold
                      text-[#111827]

                      transition-all
                      duration-300

                      group-hover:text-indigo-600
                    "
                  >
                    {s.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      relative z-10

                      text-sm
                      leading-6

                      text-[#6B7280]
                    "
                  >
                    {s.description}
                  </p>

                  {/* CTA */}
                  <div
                    className="
                      service-cta
                      relative z-10

                      mt-6

                      flex
                      items-center
                      justify-center
                      gap-2

                      text-sm
                      font-semibold

                      text-transparent
                      bg-clip-text
                      bg-gradient-to-r
                      from-indigo-600
                      to-purple-600

                      opacity-0
                      translate-y-3

                      transition-all
                      duration-500

                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    Explore Service

                    <span
                      className="
                        text-indigo-600

                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </div>

                  {/* Bottom gradient line */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2

                      h-1
                      w-0

                      -translate-x-1/2

                      rounded-full

                      bg-gradient-to-r
                      from-indigo-600
                      to-purple-600

                      transition-all
                      duration-500

                      group-hover:w-2/3
                    "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Animation */}
      <style>{`
        @media (max-width: 767px) {

          .service-card {
            animation:
              mobileServiceAuto
              2.7s
              ease-in-out
              infinite;

            animation-delay: var(--delay);

            will-change: transform;
          }

          .service-card .service-icon {
            animation:
              mobileIconAuto
              2.7s
              ease-in-out
              infinite;

            animation-delay: var(--delay);
          }

          @keyframes mobileServiceAuto {

            0% {
              transform:
                scale(1)
                translateY(0);
            }

            12% {
              transform:
                scale(1.035)
                translateY(-8px);
            }

            28% {
              transform:
                scale(1.035)
                translateY(-8px);
            }

            42% {
              transform:
                scale(1)
                translateY(0);
            }

            100% {
              transform:
                scale(1)
                translateY(0);
            }
          }

          @keyframes mobileIconAuto {

            0% {
              transform:
                scale(1)
                rotate(0deg);
            }

            12% {
              transform:
                scale(1.12)
                rotate(5deg);
            }

            28% {
              transform:
                scale(1.12)
                rotate(5deg);
            }

            42% {
              transform:
                scale(1)
                rotate(0deg);
            }

            100% {
              transform:
                scale(1)
                rotate(0deg);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .service-card .service-icon {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
