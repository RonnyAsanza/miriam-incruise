import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor() { }

    getImages(): Promise<any[]> {
        return Promise.resolve([
            {
                itemImageSrc: "./../../assets/crucero1.jpg",
                thumbnailImageSrc: "./../../assets/crucero1_1.jpg",
                alt: "Description for Image 1",
                title: "Title 1"
            },
            {
                itemImageSrc: "./../../assets/crucero2.jpg",
                thumbnailImageSrc: "./../../assets/crucero2_2.jpg",
                alt: "Description for Image 2",
                title: "Title 2"
            },
            {
                itemImageSrc: "./../../assets/crucero3.jpg",
                thumbnailImageSrc: "./../../assets/crucero3_3.jpg",
                alt: "Description for Image 3",
                title: "Title 3"
            },
            {
                itemImageSrc: "./../../assets/incruise.jpg",
                thumbnailImageSrc: "./../../assets/incruise_1.jpg",
                alt: "Description for Image 4",
                title: "Title 4"
            },
            {
                itemImageSrc: "./../../assets/crucero1.jpg",
                thumbnailImageSrc: "./../../assets/crucero1_1.jpg",
                alt: "Description for Image 1",
                title: "Title 5"
            },
            {
                itemImageSrc: "./../../assets/crucero2.jpg",
                thumbnailImageSrc: "./../../assets/crucero2_2.jpg",
                alt: "Description for Image 2",
                title: "Title 6"
            },
            {
                itemImageSrc: "./../../assets/crucero3.jpg",
                thumbnailImageSrc: "./../../assets/crucero3_3.jpg",
                alt: "Description for Image 3",
                title: "Title 7"
            },
            {
                itemImageSrc: "./../../assets/incruise.jpg",
                thumbnailImageSrc: "./../../assets/incruise_1.jpg",
                alt: "Description for Image 4",
                title: "Title 8"
            },
            {
                itemImageSrc: "./../../assets/crucero2.jpg",
                thumbnailImageSrc: "./../../assets/crucero2_2.jpg",
                alt: "Description for Image 2",
                title: "Title 9"
            },
            {
                itemImageSrc: "./../../assets/crucero3.jpg",
                thumbnailImageSrc: "./../../assets/crucero3_3.jpg",
                alt: "Description for Image 3",
                title: "Title 10"
            },
            {
                itemImageSrc: "./../../assets/incruise.jpg",
                thumbnailImageSrc: "./../../assets/incruise_1.jpg",
                alt: "Description for Image 4",
                title: "Title 11"
            },
        ]);
    }
}
