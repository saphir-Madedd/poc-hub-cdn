"use client";

import { Button } from "@jade-innovation/template-design";
import { AppsCards } from "./apps-card";
import { SystemCards } from "./system-cards";

export default function PageContainer() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center font-sans">
      <main className="flex w-full max-w-360 flex-1 flex-col items-center justify-between py-32! sm:items-start">
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
