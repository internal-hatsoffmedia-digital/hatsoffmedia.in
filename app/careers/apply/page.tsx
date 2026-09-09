import { Suspense } from "react";

import JobApplicationForm from "@/components/careers/JobApplicationForm";

export const metadata = {
  title: "Career Application | Hatsoff Media",
  description: "Apply for a role at Hatsoff Media and share your portfolio, experience, and motivation.",
};

export default function CareerApplicationPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      <Suspense
        fallback={
          <div className="flex min-h-[60vh] items-center justify-center px-6 text-sm font-medium text-neutral-600">
            Loading application form...
          </div>
        }
      >
        <JobApplicationForm />
      </Suspense>
    </main>
  );
}
