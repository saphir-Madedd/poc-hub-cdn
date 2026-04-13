"use client";

import { AppsCards } from "./apps-card";
import { SystemCards } from "./system-cards";
import Image from "next/image";

export default function PageContainer({ mediaUrl }: { mediaUrl: string }) {
  return (
    <div className="flex flex-1 flex-col text-lms-text-brand-secondary items-center justify-center font-sans">
      <section className="flex justify-between items-center w-full pt-30 pl-40 pr-20">
        <div className="w-135.75">
          <h1 className="font-bold  text-display-xl">
            Bonjour, Silvère Prêt à accéder à vos outils ?
          </h1>
          <p className="text-display-sm text-gray-500">
            Choisissez une application pour commencer.
          </p>
        </div>
        <Image
          src={mediaUrl}
          alt="media"
          height={524}
          width={700}
          className="h-131 w-175 object-cover object-center aspect-square"
        />
      </section>
      <main className="flex w-full max-w-360 flex-1 flex-col items-center justify-between py-32! sm:items-start">
        <div className="flex w-full flex-row bg-system-card-hover-background px-25 py-21.25">
          <SystemCards />
        </div>
        <div className="mt-16 flex w-full flex-col items-center justify-center gap-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-[32px] font-medium ">
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
        </div>
      </main>
      <footer className="text-white bg-lms-bg-footer py-5 w-full text-center">
        <span>Besoin d’aide? </span>
        <span className="font-bold">Nous contacter</span>
      </footer>
    </div>
  );
}
