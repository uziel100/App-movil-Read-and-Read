import React, { useEffect, useState } from "react";
import { View } from "react-native";
import BookWishList from "./BookWishList";
import SkeletonWishList from "../Skeleton/SkeletonWishList";
import EmptyWishlist from "./EmptyWishlist";

export default function ListWishList({ wishlist }) {
    return (
        <View>            
            {!wishlist 
                ? (<SkeletonWishList />) 
                : wishlist.length === 0 
                    ? ( <EmptyWishlist />) 
                    : (
                        wishlist.map((item) => (
                            <BookWishList
                                key={item.bookId._id}
                                idBook={item.bookId._id}
                                title={item.bookId.title}
                                price={item.bookId.price}
                                imgUrl={item.bookId.imgUrl}
                            />
                        )
                    )
            )}
        </View>
    );
}
