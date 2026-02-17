import { getNewsList } from "@/app/_Libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/constants";
import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/searchField";

type Props = {
    searchParams: Promise<{
        q?: string;
    }>;
};

export default async function Page({ searchParams }: Props) {
    const resolvedSearchParams = await searchParams;
    const { contents: news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        q: resolvedSearchParams.q,
    });

    return (
        <>
            <SearchField />
            <NewsList news={news} />
        </>
    );
}