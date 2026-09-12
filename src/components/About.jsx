// src/components/About.jsx
import { BUSINESS_CONFIG } from "../config";
import {
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-gradient-to-br
        from-indigo-50
        via-white
        to-purple-50
        py-20
      "
    >
      {/* Background Decorations */}
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

      <div
        className="
          absolute left-1/2 top-1/2
          h-64 w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-300/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span
            className="
              mb-4 inline-flex
              items-center gap-2
              rounded-full
              border border-indigo-100
              bg-white/80
              px-4 py-2
              text-sm font-semibold
              text-indigo-600
              shadow-sm
              backdrop-blur
            "
          >
            <Sparkles size={16} />
            About The Printing Hub
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
            Turning Your Ideas Into{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
              "
            >
              Something Real
            </span>
          </h2>

          <p
            className="
              mx-auto mt-5
              max-w-2xl
              text-base
              leading-7
              text-[#6B7280]
              sm:text-lg
            "
          >
            We create personalized products that make your
            memories, ideas and brands stand out.
          </p>
        </div>

        {/* Main Card */}
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-white/70
            bg-white/80
            p-6
            shadow-[0_20px_70px_rgba(79,70,229,0.12)]
            backdrop-blur-xl
            sm:p-8
            lg:p-10
          "
        >

          {/* Card Gradient Glow */}
          <div
            className="
              absolute -right-20 -top-20
              h-56 w-56
              rounded-full
              bg-gradient-to-br
              from-indigo-400/20
              to-purple-400/20
              blur-3xl
            "
          />

          <div
            className="
              relative
              grid
              gap-10
              lg:grid-cols-[1.2fr_0.8fr]
              lg:items-center
            "
          >

            {/* Left Content */}
            <div>
              <div
                className="
                  mb-5
                  inline-flex
                  h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-indigo-600
                  to-purple-600
                  shadow-lg
                  shadow-indigo-500/25
                "
              >
                <Sparkles
                  className="text-white"
                  size={28}
                />
              </div>

              <h3
                className="
                  mb-4
                  text-2xl
                  font-bold
                  text-[#111827]
                  sm:text-3xl
                "
              >
                Your Local{" "}
                <span
                  className="
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-indigo-600
                    to-purple-600
                  "
                >
                  Custom Printing
                </span>{" "}
                Partner
              </h3>

              <p
                className="
                  mb-6
                  max-w-2xl
                  text-base
                  leading-7
                  text-[#6B7280]
                "
              >
                Located in Mubarakpur, Kamalabad Barhauli,
                Lucknow, Uttar Pradesh, The Printing Hub
                specializes in custom printing and
                personalized gifts.
              </p>

              <p
                className="
                  mb-7
                  max-w-2xl
                  text-base
                  leading-7
                  text-[#6B7280]
                "
              >
                From custom mugs and mobile covers to
                keychains, bottles and personalized gifts,
                we bring your designs to life with
                quality printing and fast local delivery.
              </p>

              {/* Features */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-indigo-600"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Premium Quality Printing
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-indigo-600"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Customized Designs
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-indigo-600"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Fast Local Service
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-indigo-600"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Delivery Available
                  </span>
                </div>
              </div>
            </div>

            {/* Right Info Cards */}
            <div className="grid gap-4">

              {/* Location */}
              <div
                className="
                  group
                  rounded-2xl
                  border border-indigo-100
                  bg-gradient-to-br
                  from-indigo-50
                  to-white
                  p-5
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-indigo-200
                  hover:shadow-lg
                  hover:shadow-indigo-500/10
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex h-12 w-12
                      shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-indigo-600
                      to-purple-600
                      shadow-md
                      shadow-indigo-500/20
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  >
                    <MapPin
                      size={22}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <p className="mb-1 text-sm font-semibold text-indigo-600">
                      Our Location
                    </p>

                    <p className="text-sm leading-6 text-gray-700">
                      Mubarakpur, Kamalabad Barhauli,
                      Lucknow, UP 226201
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div
                className="
                  group
                  rounded-2xl
                  border border-purple-100
                  bg-gradient-to-br
                  from-purple-50
                  to-white
                  p-5
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-purple-200
                  hover:shadow-lg
                  hover:shadow-purple-500/10
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex h-12 w-12
                      shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-purple-600
                      to-indigo-600
                      shadow-md
                      shadow-purple-500/20
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  >
                    <Clock
                      size={22}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <p className="mb-1 text-sm font-semibold text-purple-600">
                      Service & Delivery
                    </p>

                    <p className="text-sm leading-6 text-gray-700">
                      Fast local service with delivery
                      available.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div
                className="
                  group
                  flex items-center
                  justify-between
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-600
                  to-purple-600
                  p-5
                  text-white
                  shadow-lg
                  shadow-indigo-500/20
                  transition-all
                  duration-500
                  hover:shadow-xl
                  hover:shadow-purple-500/25
                "
              >
                <div>
                  <p className="text-sm font-semibold text-white/80">
                    Have an idea?
                  </p>

                  <p className="font-bold">
                    Let&apos;s make it real.
                  </p>
                </div>

                <ArrowRight
                  size={24}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
