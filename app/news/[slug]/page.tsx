import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_Libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

type Props = {
    params: Promise<{
        slug: string;
    }>;
    searchParams: Promise<{
        dk?: string;
    }>;
};

export const revalidate = 0;

export default async function Page({ params, searchParams }: Props) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const data = await getNewsDetail(resolvedParams.slug, {
        draftKey: resolvedSearchParams.dk,
    }).catch(notFound);

    return (
        <>
          <Article data={data} />
          <div className={styles.footer}>
            <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
          </div>
        </>
    );
}