"use client";

import { PageIntro } from "@/app/components/PageIntro";
import { AlumnisDisplay } from "@/app/alumnis/AlumnisDisplay";
import { useTranslation } from "react-i18next";

import promo2025 from "@/app/assets/alumnis/2025.jpg";
import promo2024 from "@/app/assets/alumnis/2024.jpg";
import promo2023 from "@/app/assets/alumnis/2023.jpg";
import promo2019 from "@/app/assets/alumnis/2019.jpeg";

const alumnis = [
  {
    image: promo2025,
    title: "SIGL - 2025",
    names: ["Hugo Ratte", "Vincent Nguyen"],
    linkedinUrl: [
      "https://www.linkedin.com/in/hugo-ratte/",
      "https://www.linkedin.com/in/vincent-thien-nguyen/",
    ],
    year: 2025,
  },
  {
    image: promo2024,
    title: "SIGL - 2024",
    names: ["Victor Crépin", "Georgia Bjärstål"],
    linkedinUrl: ["https://www.linkedin.com/in/crepinvictor/", ""],
    year: 2024,
  },
  {
    image: promo2023,
    title: "SIGL - 2023",
    names: ["Aymerick Olivaux", "Tanguy Le Henaff"],
    linkedinUrl: ["", ""],
    year: 2023,
  },
  {
    image: promo2019,
    title: "SIGL - 2019",
    names: ["Anas Haloui", "Mathieu Cornet"],
    linkedinUrl: ["", ""],
    year: 2019,
  },
];

export default function Alumnis() {
  const { t } = useTranslation("fr", { useSuspense: false });
  return (
    <>
      <PageIntro eyebrow={t("alumnis.header")} title={t("alumnis.title")}>
        <p>{t("alumnis.description")}</p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <AlumnisDisplay alumnis={alumnis} />
      </div>
    </>
  );
}
