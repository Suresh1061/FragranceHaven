type ProductType = {
     _id: string;
     name: string;
     images: string[];
     smallDescription: string;
     largeDescription: string;
     price: number;
}

type Review = {
     rating: number,
     comment: string
}

type ProductReview = {
     product_id: number,
     reviews: Review[]
}

type ApiResponse = {
     success: boolean,
     message: string,
     products?: ProductType[],
     product?: ProductType,
     reviews?: Review[]
}