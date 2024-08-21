import Gallery from "@/app/components/Gallery"

type Props = {
    params: {
        item: string
    }
}

export function generateMetadata({ params: { item } }: Props) {
    return {
        title: `Results for ${item}`
    }
}

export default function SearchResults({ params: { item } }: Props) {
    return <Gallery topic={item} />
}