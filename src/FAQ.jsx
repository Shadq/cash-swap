import React from "react";

const FAQ = () => {
  return (
    <div
      className="mt-32 flex flex-col text-center justify-center items-center"
      id="faq"
    >
      <h1 className="text-5xl font-semibold text-sky-500">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <div class="max-w-screen-xl mx-auto px-5 min-h-sceen">
        <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          <div class="py-12">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-2xl">
                  How can we buy, sell and cash out crypto
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="40"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="40"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-gray-400 mt-3 group-open:animate-fadeIn text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit fugiat, inventore porro doloremque amet quisquam
                quas eos placeat veritatis dolorum error cumque maxime
              </p>
            </details>
          </div>
          <div class="py-12">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-2xl">
                  How long will it take to receive my money?
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="40"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="40"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-gray-400 mt-3 group-open:animate-fadeIn text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit fugiat, inventore porro doloremque amet quisquam
                quas eos placeat veritatis dolorum error cumque maxime
              </p>
            </details>
          </div>
          <div class="py-12">
            <details class="group">
              <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-2xl">
                  From which country can I cash out my crypto from?
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="40"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="40"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-gray-400 mt-3 group-open:animate-fadeIn text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit fugiat, inventore porro doloremque amet quisquam
                quas eos placeat veritatis dolorum error cumque maxime
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
