"use client";

import { PageIntro } from "@/app/components/PageIntro";
import { useTranslation } from "react-i18next";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import Link from "next/link";

export default function Intranet() {
  const { t } = useTranslation("fr", { useSuspense: false });
  return (
    <>
      <PageIntro eyebrow={t("intranet.header")} title={t("intranet.title")}>
        <p>{t("intranet.description")}</p>
      </PageIntro>

      <div>
        <Container className="mt-20">
            <Button className="mt-10" href="https://intranet.sigl.epita.fr" target="_blank">
                {t("intranet.link")}
            </Button>
            <p className="mt-6">
                {t("intranet.no_credentials")}
            </p>
            <p>
                {t("intranet.contact")} <Link href="/contact" className="underline">{t("intranet.contact_link")}</Link>.
            </p>
        </Container>
      </div>
    </>
  );
}
