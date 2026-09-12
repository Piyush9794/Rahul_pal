// src/components/HowItWorks.jsx
import {
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    title: "Share Your Idea",
    description:
      "Send us your concept, photo or design.",
  },
  {
    title: "Choose Your Product",
    description:
      "Select the item you want customized.",
  },
  {
    title: "Approve Your Design",
    description:
      "We send a proof for your approval.",
  },
  {
    title: "Print & Collect",
    description:
      "We print and you collect or get it delivered.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        relative overflow-hidden
        bg-[#F9FAFB]
        py-20
      "
    >
      {/* Background decorations */}
      <div
        className="
          absolute -left-24 -top-24
          h-72 w-72
          rounded-full
          bg-indigo-400/20
          blur-3xl
        "
      />

      <div
        className="
          absolute -bottom-24 -right-24
          h-72 w-72
          rounded-full
          bg-purple-400/20
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
            🚀 Simple & Fast Process
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
            How It{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
              "
            >
              Works
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
            From your idea to the final product,
            our simple process makes customization
            quick, easy and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div
          className="
            relative
            grid gap-7
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="how-step group relative"
              style={{
                "--delay": `${i * 2.7}s`,
              }}
            >

              {/* Connecting arrow */}
              {i < steps.length - 1 && (
                <div
                  className="
                    absolute
                    -right-5
                    top-1/2
                    z-20
                    hidden
                    -translate-y-1/2
                    lg:block
                  "
                >
                  <div
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-indigo-100
                      bg-white
                      shadow-md
                    "
                  >
                    <ArrowRight
                      size={18}
                      className="
                        text-indigo-600
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              )}

              {/* Gradient glow */}
              <div
                className="
                  absolute -inset-[2px]
                  rounded-2xl

                  bg-gradient-to-r
                  from-indigo-600
                  to-purple-600

                  opacity-20
                  blur-[2px]

                  transition-all
                  duration-500

                  group-hover:opacity-100
                  group-hover:blur-md
                "
              />

              {/* Card */}
              <div
                className="
                  how-card
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

                  transition-all
                  duration-500
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

                {/* Decorative circle */}
                <div
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-32 w-32
                    rounded-full

                    bg-gradient-to-br
                    from-indigo-400/20
                    to-purple-400/10

                    blur-xl

                    transition-all
                    duration-500

                    group-hover:scale-150
                  "
                />

                {/* Second decorative circle */}
                <div
                  className="
                    absolute
                    -bottom-14
                    -left-14
                    h-32 w-32
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

                {/* Step number */}
                <div
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
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className="
                    how-icon
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
                  <CheckCircle
                    size={40}
                    strokeWidth={1.8}
                    className="
                      text-white
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  {/* Ring */}
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

                {/* Step label */}
                <div
                  className="
                    relative z-10
                    mb-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]

                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-indigo-600
                    to-purple-600
                  "
                >
                  Step {i + 1}
                </div>

                {/* Title */}
                <h3
                  className="
                    relative z-10
                    mb-3
                    text-xl
                    font-bold
                    text-[#111827]

                    transition-colors
                    duration-300

                    group-hover:text-indigo-600
                  "
                >
                  {s.title}
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
                    how-cta
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
                  Get Started

                  <ArrowRight
                    size={16}
                    className="
                      text-indigo-600
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
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
          ))}
        </div>
      </div>

      {/* Mobile auto animation */}
      <style>{`
        @media (max-width: 767px) {

          .how-step {
            animation:
              howStepAuto
              2.7s
              ease-in-out
              infinite;

            animation-delay: var(--delay);
            will-change: transform;
          }

          .how-step .how-icon {
            animation:
              howIconAuto
              2.7s
              ease-in-out
              infinite;

            animation-delay: var(--delay);
          }

          @keyframes howStepAuto {

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

          @keyframes howIconAuto {

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
          .how-step,
          .how-step .how-icon {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
