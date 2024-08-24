import fetchImages from "../../../lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import addBlurredDataUrls from "../../../lib/getBase64";
import React from 'react';
import ImgContainer from "./ImgContainer";

type Props = {
    topic?: string | undefined
}

const Gallery = async ({topic}: Props) => {
	// console.log(topic);
	const url = !topic ? 'https://api.pexels.com/v1/curated?per_page=80' : `https://api.pexels.com/v1/search?query=${topic}`
	const images: ImagesResults | undefined = await fetchImages(url);
	if (!images) return <h2 className="m-4 text-2xl font-bold">No Image Found</h2>
	const photosWithBlured = await addBlurredDataUrls(images);
	return (
		<section className=" my-3 grid grid-cols-gallery auto-rows-[10px]">
				{
					photosWithBlured.map(photo => (
						<ImgContainer key={photo.id} photo={photo}/>
					))
				}
		</section>
	);
}

export default Gallery;
