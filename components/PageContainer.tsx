"use client";

import { Button } from "@jade-innovation/template-design";
import { AppsCards } from "./apps-card";
import { SystemCards } from "./system-cards";

type SessionPreview = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  accessToken?: string;
  idToken?: string;
  profile?: Record<string, unknown>;
};

type PageContainerProps = {
  session: SessionPreview;
};

export default function PageContainer({ session }: PageContainerProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center font-sans">
      <main className="flex w-full max-w-360 flex-1 flex-col items-center justify-between py-32! sm:items-start">
        <div className="mb-10 w-full overflow-auto rounded-xl border border-system-card-hover-background bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold text-primary">
            Session data
          </h3>
          <pre className="whitespace-pre-wrap break-words text-sm text-black">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
        <div className="flex w-full flex-row bg-system-card-hover-background px-[6.25rem] py-[5.3125rem]">
          <SystemCards />
        </div>
        <div className="mt-16 flex w-full flex-col items-center justify-center gap-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-[32px] font-medium text-primary">
              Nos applications externes
            </h4>
            <p className="text-center text-external-app-card-logo-placeholder">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rhoncus dui a libero efficitur feugiat.
              <br />
              Vivamus a nunc eget ligula facilisis fermentum.
            </p>
          </div>
          <div className="flex w-full max-w-312.5 flex-row items-center justify-center">
            <AppsCards />
          </div>
          <Button variant="success" size="lg">
            click me
          </Button>
        </div>
      </main>
    </div>
  );
}
